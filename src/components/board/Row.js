import React, { Component } from 'react';
import Space from './Space.js';

export default class Row extends Component {
		constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Space row={this.props.row} space='1'/>
				<Space row={this.props.row} space='2'/>
				<Space row={this.props.row} space='3'/>
				<Space row={this.props.row} space='4'/>
				<Space row={this.props.row} space='5'/>
				<Space row={this.props.row} space='6'/>
				<Space row={this.props.row} space='7'/>
				<Space row={this.props.row} space='8'/>
				<Space row={this.props.row} space='9'/>
				<Space row={this.props.row} space='10'/>
				<Space row={this.props.row} space='11'/>
				<Space row={this.props.row} space='12'/>
				<Space row={this.props.row} space='13'/>
				<Space row={this.props.row} space='14'/>
				<Space row={this.props.row} space='15'/>
				<Space row={this.props.row} space='16'/>
				<Space row={this.props.row} space='17'/>
				<Space row={this.props.row} space='18'/>
				<Space row={this.props.row} space='19'/>
				<Space row={this.props.row} space='20'/>
				<Space row={this.props.row} space='21'/>
			</div>
		);
	}
}