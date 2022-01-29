import { createContext } from 'react'
import { useState, useContext, useEffect } from 'react'
import { collection, getDocs, getFirestore, query, addDoc, writeBatch, queryCollection, where, documentId } from 'firebase/firestore'

const CartContext = createContext([])

export function useCartContext() {
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [cartTotal, setCartTotal] = useState()
    const [paymentProcess, setPaymentProcess] = useState(false)
    const [paymentFinished, setPaymentFinished] = useState(false)

    function addToCart(item) {
        setPaymentFinished(false)
        const isInCart = cartList.find((product => product.id === item.id))
        if(isInCart){
            // Reconocer el array del cart en busca del item para aumentarle la cantidad
            const oldCart = cartList.map(element => {
                // Si el id del elemento del array es igual al id del elemento que quiero agregar al carro
                if (element.id === item.id) {
                    return { ...item, quantity: item.quantity + element.quantity }
                }
                // Re armar el array del carro
                return element
            })
            setCartList(oldCart)
        } else {
            // Si no estaba se agrega al array del carrito
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
        setCartList([])
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
        .then (resp => console.log(resp.id))
        .catch(err => console.log(err))
        .finally (() => setPaymentFinished(true))
  

        // Update cart
        const queryCollection = collection(db, 'items')
        const queryUpdateStock = query(queryCollection, where(documentId(), 'in', cartList.map(it => it.id)))
        const batch = writeBatch(db)    
        await getDocs (queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).stock
        })
        ))
        .catch(err => console.log(err))
        .finally (() => console.log('Stock actualizado'))
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
            cartTotal,
            setCartTotal,
            paymentProcess,
            setPaymentProcess,
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