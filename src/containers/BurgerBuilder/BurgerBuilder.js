import React, { Component } from "react";
import { connect } from 'react-redux';
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
	state = {
        purchasing: false,
        loading: false,
        error: false
    };
    componentDidMount(){
        // axios.get("https://react-my-burger-57b05.firebaseio.com/ingredients.json")
        // .then(response => {
        //     this.setState({ ingredients: response.data });
        // })
        // .catch(error => {
        //     this.setState({ error: error})
        // });
    }
    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }
    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }
	updatePurchaseState(updatedIngredients) {
		const ingredients = {
			...updatedIngredients
		};
		const sum = Object.keys(ingredients)
			.map(key => ingredients[key])
			.reduce((sum, el) => sum + el, 0);
        return sum > 0;
	}
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false});
    }
	render() {
		const disabledInfo = {
			...this.props.ings
        };
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner/>
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        if(this.props.ings){
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />;
                    <BuildControls
                            ingredientAdded={this.props.onIngredientAdded}
                            ingredientRemoved={this.props.onIngredientRemoved}
                            disabled={disabledInfo}
                            price={this.props.price}
                            purchasable={this.updatePurchaseState(this.props.ings)}
                            ordered={this.purchaseHandler}
                        />
                </Aux>
            );
            orderSummary = (
                <OrderSummary
                    ingredients={this.props.ings}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinues={this.purchaseContinueHandler}
                    price={this.props.price}
                />
            );
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
		return (
            <Aux>
                <Modal
                show={this.state.purchasing}
                modalClosed={this.purchaseCancelHandler}
                >
                {orderSummary}
                </Modal>
                {burger}
            </Aux>
    );
	}
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
};

const mapDispatchToProps = dispatch => {
    return {
      onIngredientAdded: ingName => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
      onIngredientRemoved: ingName => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));