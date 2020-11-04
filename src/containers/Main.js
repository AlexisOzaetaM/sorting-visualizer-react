import React, { Component } from 'react'
import { createNewArray } from '../algorithms/array'
import '../assets/styles/containers/Main.scss'

class Main extends Component {
    state = {
        array: this.props.array
    }

    componentDidUpdate() {
        document.getElementById("Main").style.height = `${this.props.heightMain}px`
    }

    componentDidMount() {
        
    }

    render() {
        
        return(
            <div id="Main" className="Main">
                {
                    this.props.array.map((heightBar, index) => (
                        <div
                            key={index}    
                            className="Bar"
                            style={{
                                height: `${heightBar}px`
                            }}
                        ></div>
                    ))
                }
            </div>
        )
    }
}

export default Main