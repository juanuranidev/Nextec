import React from 'react'
import './_CarWidget.scss'

function CarWidget({onClick}) {
    return (
            <span className="fas fa-shopping-cart fa-2x cart" onClick={onClick} />
    )
}

export default CarWidget