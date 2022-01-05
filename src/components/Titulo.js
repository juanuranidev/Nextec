import React from 'react'
import '../styles/components/_Titulo.scss'

function Titulo(props) {
    return (
        <>
            <h2 className="titulo">{props.texto}</h2>
        </>
    )
}

export default Titulo
