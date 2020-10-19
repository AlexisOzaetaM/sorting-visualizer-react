import React, { Component } from 'react'
import GithubButtons from '../components/GithubButtons'
import '../assets/styles/components/Footer.scss'

const footer = () => {
    return (
        <footer className="footer">
            <div className="footer__github">
                <GithubButtons />
            </div>
        </footer>
    )
}

export default footer