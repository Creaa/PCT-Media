import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<footer className="site-footer">
				<div className="footer-section">
					<h5 className="footer-title">About</h5>
					<h6 className='footer-text'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque asperiores eveniet omnis sequi, aut voluptates at modi molestias, suscipit itaque ea explicabo quas sint sed nostrum! Natus eius in hic.
					</h6>
				</div>
				<div className="footer-section">
					<h5 className="footer-title">Adress</h5>
					<span className="footer-text">Willow Street 5</span>
					<span className="footer-text">205-120 Stockholm</span>
					<span className="footer-text">Sweden</span>
				</div>
				<div className="footer-section">
					<h5 className="footer-title">Contact</h5>
					<span className="footer-text">tel: 0210321321</span>
					<span className="footer-text">pct@loremipsum.com</span>
				</div>
			</footer>);
	}
}

export default Footer;