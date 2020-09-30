import React from 'react'

import '../assets/styles/components/Slider.scss'

const Slider = (props) => {
    return(
        <div className="Slider-container">
            <input 
                type="range" 
                min={props.min} 
                max={props.max} />
        </div>
    )
}

export default Slider;