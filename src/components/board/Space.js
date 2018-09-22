import React, { Component } from 'react';

export default class Space extends Component {
	constructor(props){
		super(props);

	}

	render() {
		return (
			<div className='space' onClick={this.props.handleClick}>
				R={this.props.row}
				<br />
				S={this.props.space}
			</div>
		);
	}
}