import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
const state = {
	
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots:robots,
			searchfield:''
		} //state is something that can change
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}//any time making my own methods, using arrow functions, make sure that this belongs to 
	//where it was created, in this case, App

	render () {
		const filteredRobots = this.state.robots.filter( robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		  <div className='tc'>
			<h1>RobotFriends</h1> 
			<SearchBox searchChange={this.onSearchChange} />
			<CardList robots= {filteredRobots} />
		  </div>
		)
	}

}
	

export default App;