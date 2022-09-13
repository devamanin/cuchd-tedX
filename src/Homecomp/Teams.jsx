import ReactCardFlip from 'react-card-flip';
import React, { Component } from 'react';

class Teams extends Component {
	constructor() {
		super();
		this.state = {
			isFlipped: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
	}

	render() {
		return (
			<>

			<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
				{/* <div className='teams'> */}
				<div className='teams' onClick={this.handleClick}>
					<div>
						<section>
							<fig><img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								width={"100%"} /></fig>
							<h5>Front of Card</h5>
							<p>TEDX</p>
						</section>
					</div>
				</div>
				<div className='teams' onClick={this.handleClick}>
					<div>
						<section>
							{/* <fig><img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								width={"100%"} /></fig> */}
								<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
									Molestias veritatis dolorem facilis pariatur, porro ipsum 
									numquam ullam similique minus officia accusantium, saepe odit'
									illo illum. Voluptatum harum minima consectetur laudantium.
								</h2>
							<h5>Back of Card</h5>
							<p>TEDX</p>
						</section>
					</div>
				</div>


				
				{/* </div>	 */}
			</ReactCardFlip>


			</>
		)
	}
}

export default Teams;