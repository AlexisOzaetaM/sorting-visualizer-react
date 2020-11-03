import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../containers/Main'
import '../assets/styles/containers/App.scss';

class App extends Component {
	state = {
		heightMain: 0,
		
	}

	handleCreateArray = (e) => {
		//console.log(e.target);
	}

	handleSortArray = (e) => {
		//console.log(e.target);
	}

	handleSelectAlgorithm = (e) => {
		//console.log(e.target.value);
	}

	handleSlider = (e) => {
		//console.log(e.target.value);
	}

	componentDidMount() {
		const heightPage = document.getElementById("root").offsetHeight
		const heightFooter = document.getElementsByClassName("footer")[0].offsetHeight
		const heightHeader = document.getElementsByClassName("header")[0].offsetHeight
		const heightMain = heightPage - heightHeader - heightFooter

		this.setState({
			...this.state,
			heightMain: heightMain
		})
	}

	render() {
		const { heightMain } = this.state
		
		return (
			<div className="App">
				<Header 
					onCreateArray={this.handleCreateArray} 
					onSortArray={this.handleSortArray}
					onSelectAlgorithm={this.handleSelectAlgorithm}
					onChangeSlider={this.handleSlider} /> 
				<Main 
					heightMain={heightMain} />
				<Footer />
			</div>
		);
	}
}

export default App;
