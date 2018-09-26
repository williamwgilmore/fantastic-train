import React, { Component } from 'react';

export default class Town extends Component {
	constructor(props){
		super(props);

		this.adjustGold = this.adjustGold.bind(this);
		this.updateGold = this.updateGold.bind(this);

		this.state = {
			health: 10,
			gold: 10,
			level: 0,
			goldChange: 0
		};
	}

	updateGold(event){
		let newGold = parseInt(event.target.value);
		this.setState({
			goldChange: newGold,
		})
	}

	adjustGold(){
		let newGold = this.state.goldChange;
		this.setState({
			gold: this.state.gold + newGold,
		})
	}

	render() {
		return (
			<div className='row'>
				<div className='col-md-12'>
					<div className='town'>
						<div><p>Level: &nbsp;&nbsp;{this.state.level}</p></div>
						<div><p>Health: {this.state.health}</p></div>
						<div><p>Gold: &nbsp;&nbsp;&nbsp;{this.state.gold}</p></div>
						<input onChange={this.updateGold} className='fixWidth'></input>
						<button onClick={this.adjustGold}>Add Gold</button>
					</div>
				</div>
			</div>
		);
	}
}