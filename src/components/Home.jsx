import React, { Component } from 'react';
import Nav from "./Home/Nav"
import Header from "./Home/Header"
import Products from "./Home/Products"
import ProductsList from "./../products.json";
import Footer from "./Home/Footer"
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class Home extends Component {
	constructor() {
		super()
		this.state = {
		}
		AOS.init();
	}



	render() {
		return (
			<div
				data-aos="fade-in"
				data-aos-offset="300"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false">
				<Nav />
				<Header />
				<Products itemsToDisplay={ProductsList} />
				<Footer />
			</div>
		);
	}
}

export default Home;
