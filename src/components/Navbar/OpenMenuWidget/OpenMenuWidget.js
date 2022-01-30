import React from 'react'

function OpenMenuWidget({onClick}) {
    return (
        <span className="fas fa-bars fa-2x openMenu" onClick={onClick} />
    )
}

export default OpenMenuWidget