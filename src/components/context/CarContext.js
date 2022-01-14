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
        const exist = cartList.find((product => product.id === item.id))
        // exist
        // ? setCartList(cartList.map((x) => x.id === item.id) ? {...exist, quantity: exist.quantity + 1} : null)
        // : setCartList([...cartList, item])

        console.log(exist)

        if(exist){
            console.log("existe")
            // setCartList(cartList.map((x) => x.id === item.id) ? {...exist, quantity: exist.quantity + 1} : null)
        } else {
            console.log("no existe")
            setCartList([...cartList, item])
        }

        exist
        ? console.log("existe")
        : console.log("no existe")
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