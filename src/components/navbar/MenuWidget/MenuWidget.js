import React from 'react'
import './_MenuWidget.scss'

const openMenu = () => {

}

function MenuWidget() {
    return (
            <i className="fas fa-bars fa-2x menuWidget" onClick={openMenu}></i>
    )
}

export default MenuWidget
