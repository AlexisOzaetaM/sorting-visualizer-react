import React, { Component } from 'react'
import GithubButtons from '../components/GithubButtons'
import Title from '../components/Title'
import Button from '../components/Button'
import Slider from '../components/Slider'
import Select from '../components/Select'
import '../assets/styles/components/Header.scss'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            methods: [
                { value: 'BubbleSort', name: "Choose an algorithm" },
                { value: 'BubbleSort', name: "Bubble Sort" },
                { value: "MergeSort", name: "Merge Sort" },
                { value: "HeapSort", name: "Heap Sort" },
                { value: "QuickSort", name: "Quick Sort" }
            ]
        }
    }

    render() {
        const {methods} = this.state

        return (
            <header className="Header-container">
                <div className="Title-container"><Title /></div>
                <div className="New-container"><Button title="New Array" color="blue" event={null}/></div>
                <Slider min="10" max="100"/>
                <Select methods={methods} />
                <div className="Sort-container"><Button title="Sort!" color="green" event={null}/></div>
                <GithubButtons />
            </header>
        )
    }
}

export default Header