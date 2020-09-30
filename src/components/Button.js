import React from 'react'

import '../assets/styles/components/Button.scss'

const button = ({title, color, event}) => {
    return(
        <div className="Button-container">
            <button className={color} onClick={event}>
                {title}
            </button>
        </div>
    )
}

export default button;