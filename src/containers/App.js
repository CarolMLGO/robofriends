import React, { Component } from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots:[],
			searchfield:''
		} //state is something that can change
	}

	componentDidMount() {
		console.log(this.props.store.getState())
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> {
			return response.json();
		})
		.then(users => {
			this.setState({ robots:users });
		})
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}//any time making my own methods, using arrow functions, make sure that this belongs to 
	//where it was created, in this case, App

	render () {
		const {robots,searchfield} = this.state;
		const filteredRobots = robots.filter( robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		if (!robots.length) {
			return <h1 className='tc'>Loading</h1>
		} else {
		return (
		  <div className='tc'>
			<h1 className='f1'>RobotFriends</h1> 
			<SearchBox searchChange={this.onSearchChange} />
			<Scroll>
			  <ErrorBoundary>
				<CardList robots= {filteredRobots} />
			  </ErrorBoundary>
			</Scroll>
		  </div>
		)
	}

}

}
	
export default App;