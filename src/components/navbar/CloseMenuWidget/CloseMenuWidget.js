import React from 'react'

function CloseMenuWidget({onClick}) {
    return (
        <span className="fas fa-times fa-2x closeMenu" onClick={onClick} />
    )
}

export default CloseMenuWidget