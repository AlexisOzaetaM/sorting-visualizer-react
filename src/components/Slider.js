import React from 'react'

import '../assets/styles/components/Slider.scss'

const Slider = (props) => {
    return(
        <div className="slider">
            <input className="slider__input"
                type="range" 
                min={props.min} 
                max={props.max}
                onChange={props.event} />
        </div>
    )
}

export default Slider;