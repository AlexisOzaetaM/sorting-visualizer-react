import React from 'react';
import Header from '../components/Header'
import Main from '../containers/Main'
import '../assets/styles/containers/App.scss';

const App = () => {
	return (
		<div className="App">
			<Header /> 
			<Main />
		</div>
	);
}

export default App;
