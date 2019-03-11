import React, { Component } from 'react';
import '../../../node_modules/aos/dist/aos.css';
import AOS from 'aos';
import { Redirect } from 'react-router-dom'
import './Succes.css';
class Succes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			transfer: false

		}
		AOS.init()

		this.componentDidMount = () => {
			setTimeout(() => {
				this.setState({
					transfer: true
				})
			}, 5000);
		}
	}
	render() {
		if (this.state.transfer) {
			return <Redirect to="/" />
		}
		return (
			<div className='succes-wrapper'
				data-aos="fade-in"
				data-aos-offset="100"
				data-aos-delay="200"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
			>
				<img src="https://openclipart.org/image/2400px/svg_to_png/214028/Thumbs-Up-Circle.png" className="succes-icon" alt="thumbs up" />
				<p className='succes'>
					Your payment has been successfully processed.
			</p>
				<p className="succes">We would like to thank you for choosing our company!</p>
				<p className='succes'>You will be transfer to the main page</p>
			</div>);
	}
}

export default Succes;