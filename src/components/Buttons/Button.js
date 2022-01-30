import React from 'react'
import './_Button.scss'

const Button = ({text}) => {
    return (
        <>
            <button className="button">{text}</button>   
        </>
    )
}

export default Button
