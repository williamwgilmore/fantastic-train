import React, { Component } from 'react';
import Row from './Row.js';
import Town from './Town.js';

export default class Board extends Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);

	}

	handleClick(){

	}

	render() {
		return (
			<div className='board fullHeight'>
				<Row />
				<Row />
				<Row />
				<Row />
				<Row />
			</div>
		);
	}
}