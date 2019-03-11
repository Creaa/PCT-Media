import React, { Component } from 'react';
import './Nav.css';
import NavList from "./NavList"
import { NavLink } from 'react-router-dom'


class Navbar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			navSiteClasses: ["site-nav"],
			navElementsClasses: ["nav-list"],
			navList: NavList,
		}
	}
	mobileMenu = () => {
		if (this.state.navSiteClasses.includes("site-nav-mobile")) {
			let temporaryNavList = this.state.navSiteClasses;
			let temporaryElementsList = this.state.navElementsClasses;
			let i = temporaryNavList.indexOf("site-nav-mobile")
			let j = temporaryElementsList.indexOf("nav-list-mobile")
			temporaryNavList.splice(i, 1)
			temporaryElementsList.splice(j, 1)
			this.setState({
				navSiteClasses: temporaryNavList,
				navElementsClasses: temporaryElementsList
			})
		}
		else {
			let temporaryNavList = this.state.navSiteClasses;
			let temporaryElementsList = this.state.navElementsClasses;
			temporaryNavList.push("site-nav-mobile");
			temporaryElementsList.push("nav-list-mobile")
			this.setState({
				navSiteClasses: temporaryNavList,
				navElementsClasses: temporaryElementsList
			})

		}
	}
	handleScroll = () => {
		if (window.scrollY > 0 && !this.state.navSiteClasses.includes("site-nav-background")) {
			let temporaryNavList = this.state.navSiteClasses;
			temporaryNavList.push("site-nav-background")
			this.setState({
				navSiteClasses: temporaryNavList
			})
		}
		else if (window.scrollY == 0) {
			let temporaryNavList = this.state.navSiteClasses;
			let i = temporaryNavList.indexOf("site-nav-background")
			temporaryNavList.splice(i, 1)
			this.setState({
				navBackground: temporaryNavList
			})
		}
	}


	componentDidMount = () => {
		if (this.props.storeNavList) {
			this.setState({
				navList: this.props.storeNavList
			})
		}
		else {
			this.setState({
				navList: NavList
			})
		}
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.handleScroll);
	}


	render() {
		return (
			<div className="nav-wrapper">
				<nav className={this.state.navSiteClasses.join(' ')}>
					<div className="nav-header">
						<div className='hamburger'>
							<input className="hamburger-checkbox"
								onClick={this.mobileMenu} type="checkbox" />
							<span className='hamburger-line'></span>
							<span className='hamburger-line'></span>
							<span className='hamburger-line'></span>
						</div>
						<a href="" className="nav-link logo">PCT</a>
					</div>
					<ul className={this.state.navElementsClasses.join(' ')}>
						{this.state.navList.map((el, key) => {
							return (<li key={key} className='nav-elements'><NavLink className={`nav-link ${el.class}`} to={el.url}>{el.name}</NavLink></li>)
						})}
						{this.props.storeNavList ? <li className="nav-elements checkout-wrapper">
							{this.props.itemsInCard > 0 ? <span className="item-counter">{this.props.itemsInCard}</span> : false}
							<NavLink to="/store" onClick={this.props.showCheckout} className="nav-link checkout hide"></NavLink>
						</li> : false}
					</ul>
				</nav>

			</div>
		);
	}
}

export default Navbar;