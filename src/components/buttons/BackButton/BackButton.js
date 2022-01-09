import React from 'react'
import { Link } from 'react-router-dom'
import './_BackButton.scss'

const BackButton = () => {
    return (
            <Link to="/"><button className="backButton">Volver</button></Link>
    )
}

export default BackButton
