import React, { Component } from 'react'

import '../assets/styles/containers/Main.scss'

class Main extends Component {    
    componentDidUpdate() {
        document.getElementById("Main").style.height = `${this.props.heightMain}px`
    }

    render() {
        return(
            <div id="Main" className="Main">

            </div>
        )
    }
}

export default Main