import React from 'react'

import '../assets/styles/components/Select.scss'

const select = (props) => {
    return(
        <div className="select">
            <select onChange={props.event}>
                {
                    props.methods.map((method, index) => {
                        return <option 
                            className="select__option" 
                            key={index} 
                            value={method.value}
                            disabled={method.isDisabled}>
                                {method.name}
                            </option>
                    })
                }
            </select>
        </div>
    )
}

export default select;