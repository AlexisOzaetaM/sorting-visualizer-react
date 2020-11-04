import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../containers/Main'
import { createNewArray } from '../algorithms/array'
import '../assets/styles/containers/App.scss';

class App extends Component {
	state = {
		heightMain: 0,
		bars: {
			array: [],
			length: 50
		}
	}

	handleCreateArray = () => {
		const newArray = createNewArray(this.state.bars.length, this.state.heightMain)
		
		this.setState({
			...this.state,
			bars: {
				...this.state.bars,
				array: newArray
			}
		})
	}

	handleSortArray = (e) => {
		//console.log(e.target);
	}

	handleSelectAlgorithm = (e) => {
		//console.log(e.target.value);
	}

	handleSlider = (e) => {
		const newArray = createNewArray(e.target.value, this.state.heightMain)

		this.setState({
			...this.state,
			bars: {
				array: newArray,
				length: e.target.value
			}
		})
	}

	componentDidMount() {
		const heightPage = document.getElementById("root").offsetHeight
		const heightFooter = document.getElementsByClassName("footer")[0].offsetHeight
		const heightHeader = document.getElementsByClassName("header")[0].offsetHeight
		const heightMain = heightPage - heightHeader - heightFooter
		
		const newArray = createNewArray(this.state.bars.length, heightMain)

		this.setState({
			...this.state,
			heightMain: heightMain,
			bars: {
				...this.state.bars,
				array: newArray
			}
		})
	}

	render() {
		const { heightMain, bars } = this.state
		
		return (
			<div className="App">
				<Header 
					onCreateArray={this.handleCreateArray} 
					onSortArray={this.handleSortArray}
					onSelectAlgorithm={this.handleSelectAlgorithm}
					onChangeSlider={this.handleSlider} /> 
				<Main 
					heightMain={heightMain} 
					array={bars.array} />
				<Footer />
			</div>
		);
	}
}

export default App;
