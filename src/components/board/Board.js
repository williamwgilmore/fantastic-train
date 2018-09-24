import React, { Component } from 'react';
import Town from './Town.js';

export default class Board extends Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
		// this.state = {
		// 	bioClass: 'bioText',
		// };
	}

	handleClick(){

	}

	render() {
		return (
			<div className='board fullHeight'>
				<Town />
				<Town />
			</div>
		);
	}
}