import React from 'react'
import './_DeleteItemButton.scss'
import { useCartContext } from '../../context/CarContext'

const DeleteItemButton = () => {
    const { removeItem } = useCartContext()
    return (
        <button className="deleteItemButton" onClick={removeItem} >Eliminar</button>
    )
}

export default DeleteItemButton
