import React from 'react'
import { Link } from 'react-router-dom'
import './_BackButton.scss'

const BackButton = () => {
    return (
            <button className="buttonBody"><Link to="/" className="buttonLink">Volver</Link></button>
    )
}

export default BackButton