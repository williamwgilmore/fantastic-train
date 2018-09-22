import React, { Component } from 'react';
import Row from './Row.js';

export default class Board extends Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
		// this.state = {
		// 	bioClass: 'bioText',
		// };
	}

	handleClick(){
		console.log('Row: ' + this.row);
		console.log('Space: ' + this.space);
	}

	render() {
		return (
			<div className='flex justify-between'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='boardContainer'>
							<div className='rowOne'>
								<Row row='1' handleClick={this.handleClick} />
							</div>
							<div className='rowTwo'>
								<Row row='2'/>
							</div>
							<div className='rowThree'>
								<Row row='3'/>
							</div>
							<div className='rowFour'>
								<Row row='4'/>
							</div>
							<div className='rowFive'>
								<Row row='5'/>
							</div>
							<div className='rowSix'>
								<Row row='6'/>
							</div>
							<div className='rowSeven'>
								<Row row='7'/>
							</div>
							<div className='rowEight'>
								<Row row='8'/>
							</div>
							<div className='rowNine'>
								<Row row='9'/>
							</div>
							<div className='rowTen'>
								<Row row='10'/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}