import React, { Component } from 'react';
import './Header.css';
import '../../../node_modules/aos/dist/aos.css';
import AOS from 'aos';
import { NavLink } from 'react-router-dom'

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {}
		AOS.init();
	}

	componentDidMount = () => {
		AOS.refresh()
	}
	render() {
		return (
			<div className='site-header'>
				<h1
					data-aos="fade-in"
					data-aos-offset="300"
					data-aos-delay="1000"
					data-aos-duration="500"
					data-aos-easing="ease-in-out"
					data-aos-once="false"
					className='site-title'> PCT</h1>
				<h2 className='site-description'
					data-aos="fade-in"
					data-aos-offset="300"
					data-aos-delay="2000"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
				>Phones Computers Technologies</h2>
				<NavLink to='/store#'
					className='store-button'
					data-aos="fade-in"
					data-aos-delay="3000"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
				>Store</NavLink>
			</div>
		);
	}
}

export default Header;