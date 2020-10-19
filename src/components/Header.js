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
                { value: 1, name: "Bubble Sort" },
                { value: 2, name: "Merge Sort" },
                { value: 3, name: "Heap Sort" },
                { value: 4, name: "Quick Sort" }
            ],
            isSettingsOpen: false
        }
    }

    showSettings = () => {
        let { isSettingsOpen } = this.state
        this.setState({ 'isSettingsOpen': !isSettingsOpen })
        
    }

    render() {
        const { methods, isSettingsOpen } = this.state

        return (
            <header className="header">
                <div className="header__title"><Title /></div>
                <div className="header__icon" onClick={() => this.showSettings()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
                </div>
                <div className={`header__settings ${isSettingsOpen ? 'header__settings-open' : ''}`}>
                    <div className="header__settings__slider">
                        <Slider min="10" max="100"/>
                    </div>
                    <div className="header__settings__select">
                        <Select methods={methods} />
                    </div>
                    <div className="header__settings__buttons">
                        <Button title="New Array" color="blue" event={null}/>
                        <Button title="Sort!" color="green" event={null}/>
                    </div>
                    <div className="header__settings__github">
                        <GithubButtons />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header