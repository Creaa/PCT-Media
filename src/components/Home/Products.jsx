import React, { Component } from 'react';
import './Products.css';
import '../../../node_modules/aos/dist/aos.css';
import AOS from 'aos';
import ProductsList from "../../products.json";
import { NavLink } from 'react-router-dom'

class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
		AOS.init()
	}

	componentWillReceiveProps = () => {
		if (this.props.itemsToDisplay) {
			this.setState({
				productList: this.props.itemsToDisplay
			})
		}
		AOS.refresh()
		AOS.init()
	}


	render() {
		return (
			<section className="product-list-wrapper">
				<ul className="products-list">
					{this.props.itemsToDisplay.map((el) => {
						return (
							<li
								key={el.id}
								className="product-element"
								data-aos="fade-in"
								data-aos-offset="100"
								data-aos-delay="200"
								data-aos-duration="1000"
								data-aos-easing="ease-in-out"
								data-aos-once="false"
							>
								<img src={require(`../../img/${el.img}`)} className='product-photo' alt="photo of product" />
								{(el.price - el.oldPrice) < 0 ? <span style={{ display: this.props.itemSelected ? 'none' : false }} className='saving-banner'>-{parseInt(((el.oldPrice - el.price) / el.oldPrice * 100))}%</span> : false}
								<p className='product-title'>{el.name}</p>
								{this.props.itemSelected ? false : <div className="product-prices">
									<p className='product-price'>{el.price}$</p>
									<p className='product-price old'>{el.oldPrice ? `${el.oldPrice}$` : false}</p>
								</div>}
								{this.props.itemsToDisplay.length === 1 ? <div className="product-options">
									{el.options.map((el) => {
										return (
											<div key={el.id} className="product-option">
												<p className="option-description">{el.name}</p>
												<div>
													<select onChange={this.props.optionChange} className='option-select' value={el.id === 100 ? this.props.colorPicked : this.props.capacityPicked} id={el.id}>
														{el.values.map((el) => {
															return <option key={el.id} value={el.name}>{el.name}</option>
														})}
													</select>
												</div>
											</div>
										)
									})}
									<span className="product-price total">Total: {this.props.productPrice}$</span>
								</div> : false}
								{this.props.itemClick ? <span className="purchase-buttons">
									<NavLink onClick={this.props.itemClick} id={el.id} to="/store" className="store-button purchase">{this.props.buttonText}</NavLink>
									{this.props.itemsToDisplay.length === 1 ? <NavLink onClick={this.props.cancelButton} to="/store#" className="store-button cancel">Cancel</NavLink> : false}
								</span> : <NavLink to="/store" className="store-button purchase">Buy now!</NavLink>}
							</li>
						)
					})}
				</ul>
			</section>
		);
	}
}

export default Products;