import React, { Component } from 'react';
import Space from './Space.js';

export default class Row extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Space row={this.props.row} space='1' handleClick={this.props.handleClick}/>

			</div>
		);
	}
}