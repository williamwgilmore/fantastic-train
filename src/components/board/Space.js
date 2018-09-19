import React, { Component } from 'react';

export default class Space extends Component {
	render() {
		return (
			<div className='space'>
				R={this.props.row}
				<br />
				S={this.props.space}
			</div>
		);
	}
}