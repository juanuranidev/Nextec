import React from 'react'
import { Link } from 'react-router-dom'

const NavBarLink = (props) => {
    return (
        <li className={props.class}><Link to={props.link} onClick={props.onClick} >{props.name}</Link></li>
    )
}

export default NavBarLink