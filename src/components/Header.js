import React from 'react'
import GithubButtons from '../components/GithubButtons'
import Title from '../components/Title'
import '../assets/styles/components/Header.scss'

const header = (props) => {
    return (
        <header className="Header-container">
            <Title />
            <div className="Menu-wrapper">
                <GithubButtons />
            </div>
        </header>
    )
}

export default header