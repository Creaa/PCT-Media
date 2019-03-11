import React, { Component } from 'react';
import ProductsList from "../../products.json";
import { Redirect } from 'react-router-dom'
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
			postCodeInput: '',
			emailCorrect: false,
			succes: false,

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

	submitHandler = () => {
		if (this.state.firstNameInput.length > 0 && this.state.lastNameInput.length > 0 && this.state.emailCorrect && this.state.streetInput.length > 0 && this.state.houseNumberInput.length > 0 && this.state.cityInput.length > 0 && this.state.postCodeInput.length > 0) {
			let productInfo = {
				user: {
					name: this.state.firstNameInput,
					surname: this.state.lastNameInput,
					email: this.state.emailInput,
					address: {
						street: this.state.streetInput,
						houseNumber: this.state.houseNumberInput,
						city: this.state.cityInput,
						postcode: this.state.postCodeInput
					}
				},
				product: this.props.products
			}
			console.log(productInfo)
			this.setState({
				succes: true
			})
		}
		else {
			alert("Error, invalid form data!")
		}
	}

	firstNameInputHandler = (e) => {
		this.setState({
			firstNameInput: e.target.value
		})
	}
	lastNameInputHandler = (e) => {
		this.setState({
			lastNameInput: e.target.value
		})
	}
	emailInputHandler = (e) => {
		this.setState({
			emailInput: e.target.value
		})
		let regExMail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
		if (regExMail.test(e.target.value)) {
			this.setState({
				emailCorrect: true,
			})
		} else {
			this.setState({
				emailCorrect: false,
			})
		}
	}
	streetInputHandler = (e) => {
		this.setState({
			streetInput: e.target.value
		})
	}
	houseNumberInputHandler = (e) => {
		this.setState({
			houseNumberInput: e.target.value
		})
	}
	cityInputHandler = (e) => {
		this.setState({
			cityInput: e.target.value
		})
	}

	postCodeInputHandler = (e) => {
		this.setState({
			postCodeInput: e.target.value
		})
	}


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
		if (this.state.succes) {
			return <Redirect to="/success" />
		}
		else if (this.state.itemList.length === 0) {
			return <div className='card-wrapper'>
				<p className='card-info'>The card is empty.</p>
			</div>
		}
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
					<input onChange={this.firstNameInputHandler} value={this.state.firstNameInput} className="w3-input form-input" type="text" />
					<label>Last name</label>
					<input onChange={this.lastNameInputHandler} value={this.state.lastNameInput} className="w3-input form-input" type="text" />
					<label>Email</label>
					<input onChange={this.emailInputHandler} value={this.state.emailInput} className="w3-input form-input" type="email" />
					<label>Street</label>
					<input onChange={this.streetInputHandler} value={this.state.streetInput} className="w3-input form-input" type="text" />
					<label>House number</label>
					<input onChange={this.houseNumberInputHandler} value={this.state.houseNumberInput} className="w3-input form-input" type="text" />
					<label>City</label>
					<input onChange={this.cityInputHandler} value={this.state.cityInput} className="w3-input form-input" type="text" />
					<label>PostCode</label>
					<input onChange={this.postCodeInputHandler} value={this.state.postCodeInput} className="w3-input form-input" type="text" />
					<button onClick={this.submitHandler} className="store-button form-submit">Submit</button>
				</div>
			</div>
		);
	}
}

export default Checkout;