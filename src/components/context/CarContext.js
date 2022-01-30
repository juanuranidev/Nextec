import { createContext } from 'react'
import { useState, useContext, useEffect } from 'react'
import { collection, getDocs, getFirestore, query, addDoc, writeBatch, where, documentId } from 'firebase/firestore'

const CartContext = createContext([])

export function useCartContext() {
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [cartTotal, setCartTotal] = useState()
    const [paymentFinished, setPaymentFinished] = useState(false)

    function addToCart(item) {
        setPaymentFinished(false)
        const isInCart = cartList.find((product => product.id === item.id))
        if(isInCart){
            const oldCart = cartList.map(element => {
                if (element.id === item.id) {
                    return { ...item, quantity: item.quantity + element.quantity }
                }
                return element
            })
            setCartList(oldCart)
        } else {
            setCartList([...cartList, item])
        }
    }

    function removeItem(id) {
        const product = cartList.find((product => product.id === id))
        product.quantity === 1
        ? setCartList(cartList.filter((x) => x.id !== product.id))
        : setCartList(cartList.map((x) => x.id === product.id ? { ...product, quantity: product.quantity - 1 }: x))
    }

    function emptyCart() {
        setCartList([])
    }

    const purchase = async (inputs) => {
        // Create order
        let order = {}
        order.buyer = {
            name: inputs.name,
            lastName: inputs.lastName,
            country: inputs.country,
            city: inputs.city,
            street: inputs.street,
            streetNumber: inputs.streetNumber,
            zipCode: inputs.zipCode
        }
        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const name = cartItem.name;
            const price = cartItem.price * cartItem.quantity;
            const quantity = cartItem.quantity;
            return {id, name, price, quantity}
        })
        order.total = cartTotal;
        

        // Send order
        const db = getFirestore()
        const orderCollection = collection(db, 'orders') 
        await addDoc(orderCollection, order)
        .catch(err => console.log(err))
        .finally (() => setPaymentFinished(true))
  

        // Update stock
        const queryCollection = collection(db, 'items')
        const queryUpdateStock = query(queryCollection, where(documentId(), 'in', cartList.map(it => it.id)))
        const batch = writeBatch(db)    
        await getDocs (queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
        })
        ))
        .catch(err => console.log(err))
        .finally (() => setCartList([]))
        batch.commit()
    }

    useEffect(() => {
        let cartList = localStorage.getItem("cartList")
        if (cartList) {
            setCartList(JSON.parse(cartList))
          }
    }, [])

    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartList))
    }, [cartList])

    return(
        <CartContext.Provider value={{
            cartList,
            setCartList,
            cartTotal,
            setCartTotal,
            paymentFinished,
            setPaymentFinished,
            addToCart,
            removeItem,
            emptyCart,
            purchase
        }} >
            {children}
        </CartContext.Provider>
    )
}