import React, { Component } from 'react';
import Space from './Space.js';


export default class Board extends Component {
	constructor(props){
		super(props);

		this.state = {
			spaces: [],
		};
	}



	render() {
		return (
			<div className='row'>
				<Space />
				<Space />
				<Space />
				<Space />
				<Space />
			</div>
		);
	}
}