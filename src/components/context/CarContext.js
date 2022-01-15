import { createContext } from 'react'
import { useState, useContext } from 'react'

const CartContext = createContext([])

export function useCartContext() {
    return useContext(CartContext)
}

// Creación del componente que maneja el contexto
export const CartContextProvider = ({children}) => {
    // estados y funciones globales
    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        // Se fija si el item está en el carrito
        const exist = cartList.find((product => product.id === item.id))
        if(exist){
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
        console.log(cartList)
    }

    function emptyCart() {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart
        }} >
            {children}
        </CartContext.Provider>
    )
}
