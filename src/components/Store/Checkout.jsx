import React, { Component } from 'react';
import ProductsList from "../../products.json";
import './Checkout.css';
class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemList: [],
			firstNameInput: '',
			lastNameInput: '',
			emailInput: '',
			streetInput: '',
			houseNumberInput: '',
			cityInput: '',
			postCodeInput: ''

		}
	}

	// removeItem = (e) => {
	// 	console.log(e.target.id)
	// 	let list = this.state.itemList.filter((el) => el.id != e.target.id);
	// 	this.setState({
	// 		itemList: list
	// 	})
	// 	setTimeout(() => {
	// 		this.calculateTotalPrice()
	// 	}, 1);
	// }

	componentDidMount = () => {
		let allProducts = ProductsList;
		let choosenProducts = this.props.products;
		let checkoutList = [];
		allProducts.filter((el) => {
			choosenProducts.forEach(element => {
				if (element.id === el.id) {
					el.price = element.amount
					checkoutList.push(el)
				}
			})
		})
		this.setState({
			itemList: checkoutList,
			itemToLog: choosenProducts
		})
		setTimeout(() => {
			this.calculateTotalPrice()
		}, 1);
	}

	calculateTotalPrice = () => {
		let price = 0
		this.state.itemList.map((el) => price += el.price);
		this.setState({
			totalPrice: price,
		})
	}



	render() {
		return (
			<div className="card-wrapper">
				{this.state.itemList.map((el, k) => {
					return (
						<li key={k} className='card-elements'>
							<img className='card-photo' src={require(`../../img/${el.img}`)} alt="photo of item" />
							<p className='card-title'>{el.name}</p>
							<span className='card-price'>{el.price}$</span>
						</li>)
				})}
				<span className="total-prize">Total:{parseFloat(this.state.totalPrice)}$</span>
				<div className="ship-form">
					<h5>Shipment Addres</h5>
					<label>First Name</label>
					<input className="w3-input form-input" type="text" />
					<label>Last name</label>
					<input className="w3-input form-input" type="text" />
					<label>Email</label>
					<input className="w3-input form-input" type="email" />
					<label>Street</label>
					<input className="w3-input form-input" type="text" />
					<label>House number</label>
					<input className="w3-input form-input" type="text" />
					<label>City</label>
					<input className="w3-input form-input" type="text" />
					<label>PostCode</label>
					<input className="w3-input form-input" type="text" />
				</div>
			</div>
		);
	}
}

export default Checkout;