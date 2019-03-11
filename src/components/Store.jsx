import React, { Component } from 'react';
import Footer from './Home/Footer';
import Products from './Home/Products';
import ProductsList from "../products.json";
import StoreNavList from "./Store/StoreNavList"
import './Store.css';
import Nav from './Home/Nav';
import Checkout from './Store/Checkout'

class Store extends Component {
	constructor(props) {
		super(props);
		this.state = {
			storeCard: [],
			itemsToDisplay: ProductsList,
			buttonText: "Purchase",
			itemSelected: undefined,
			itemColor: undefined,
			itemCapacity: undefined,
			colorPrice: 0,
			capacityPrice: 0,
			productPrice: 0,
			showCheckout: false,
		}
	}

	productCancelButton = () => {
		this.setState({
			itemsToDisplay: ProductsList,
			buttonText: "Purchase",
			itemSelected: false,
			itemColor: false,
			itemCapacity: false

		})
	}

	componentDidMount = () => {
		window.scrollTo(0, 0)
	}

	optionChangeHandler = (e) => {
		let temporaryArray = this.state.itemsToDisplay
		let idOfOption = temporaryArray[0].options.filter((el) => el.id === parseInt(e.target.id));
		let priceOfOption = idOfOption[0].values.filter((el) => el.name === e.target.value)
		switch (e.target.id) {
			case "100":
				this.setState({
					itemColor: e.target.value,
					colorPrice: priceOfOption[0].priceModifier,
				})
				break;
			case "101":
				this.setState({
					itemCapacity: e.target.value,
					capacityPrice: priceOfOption[0].priceModifier,
				})
				break;
			default:
		}
		setTimeout(() => {
			this.updatePrice(temporaryArray[0].price)
		}, 1);
	}

	updatePrice = (price) => {
		this.setState({
			productPrice: price + this.state.capacityPrice + this.state.colorPrice
		})
	}

	showCheckout = () => {
		this.setState({
			showCheckout: true,
		})
	}

	itemClickHandler = (e) => {
		if (!this.state.itemSelected) {
			let temporaryArray = ProductsList
			temporaryArray = temporaryArray.filter(el => {
				return el.id === parseInt(e.target.id)
			})
			this.setState({
				itemsToDisplay: temporaryArray,
				buttonText: "Add to card",
				itemSelected: true,
				productPrice: temporaryArray[0].price,
				itemColor: temporaryArray[0].options[0].values[0].name,
				itemCapacity: temporaryArray[0].options[1].values[0].name
			})
			window.scrollTo(0, 0)
		}
		else {
			let itemToBuy = this.state.itemsToDisplay;
			let colorOptionValue = itemToBuy[0].options[0].values.filter((el) => el.name === this.state.itemColor)
			let capacityOptionValue = itemToBuy[0].options[1].values.filter((el) => el.name === this.state.itemCapacity)
			let product = this.state.storeCard
			product.push({
				id: itemToBuy[0].id,
				options: [
					{
						id: itemToBuy[0].options[0].id,
						value: colorOptionValue[0].id
					},
					{
						id: itemToBuy[0].options[1].id,
						value: capacityOptionValue[0].id
					}
				],
				amount: this.state.productPrice
			})
			this.setState({
				storeCard: product,
				itemsToDisplay: ProductsList,
				buttonText: "Purchase",
				itemSelected: false,
				itemColor: false,
				itemCapacity: false
			})
		}


	}
	render() {
		return (
			<div>
				<Nav itemsInCard={this.state.storeCard.length} storeNavList={StoreNavList} showCheckout={this.showCheckout} />
				{this.state.showCheckout ? <Checkout products={this.state.storeCard} /> : <Products cancelButton={this.productCancelButton} buttonText={this.state.buttonText} itemsToDisplay={this.state.itemsToDisplay} itemClick={this.itemClickHandler} optionChange={this.optionChangeHandler} capacityPicked={this.state.itemCapacity} colorPicked={this.state.itemColor} itemSelected={this.state.itemSelected} productPrice={this.state.productPrice} />}
				<Footer />
			</div>
		);
	}
}

export default Store;