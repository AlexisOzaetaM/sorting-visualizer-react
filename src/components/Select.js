import React from 'react'

import '../assets/styles/components/Select.scss'

const select = (props) => {
    return(
        <div className="Select-container">
            <select>
                {
                    props.methods.map((method, index) => {
                        return <option value={method.value}>{method.name}</option>
                    })
                }
            </select>
        </div>
    )
}

export default select;