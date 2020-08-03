import React from 'react'
import GitHubStarButton from 'react-github-btn'
import GitHubFollowButton from 'react-github-btn'
import '../assets/styles/components/GithubButtons.scss'

const githubButtons = () => {
    return (
        <div className="GitHub-button-wrapper">
            <GitHubFollowButton
                href="https://github.com/AlexisOzaetaM"
                data-size="large"
                data-show-count="true"
                aria-label="Follow @AlexisOzaetaM on GitHub">
                Follow @AlexisOzaetaM
            </GitHubFollowButton>
            <GitHubStarButton
                href="https://github.com/AlexisOzaetaM/Sorting-Visualizer-React"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star AlexisOzaetaM/Sorting-Visualizer-React on GitHub">
                Star
            </GitHubStarButton>
        </div>
    )
}

export default githubButtons