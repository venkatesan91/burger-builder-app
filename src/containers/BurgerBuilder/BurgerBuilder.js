import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const PRICE_PER_INGREDIENT = {
    salad : 1,
    bacon : 2,
    cheese : 0.5,
    meat : 2.5
}
class BurgerBuilder extends Component {
    state = {
        ingrediants : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        totalPrice : 4
    }
    addIngredientsHandler = (type) => {
        const oldTypeCount = this.state.ingrediants[type];
        const newTypeCount = oldTypeCount + 1;
        const updatedIngredients = {...this.state.ingrediants};
        updatedIngredients[type] = newTypeCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + PRICE_PER_INGREDIENT[type];
        this.setState(
            {
                ingrediants : updatedIngredients,
                totalPrice : newPrice
            }
        )
    }
    removeIngredientsHandler = (type) => {
        const oldTypeCount = this.state.ingrediants[type];
        let newTypeCount = 0;
        if(oldTypeCount - 1 > 0)
            newTypeCount = oldTypeCount - 1;
        const updatedIngredients = {...this.state.ingrediants};
        updatedIngredients[type] = newTypeCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - PRICE_PER_INGREDIENT[type];
        this.setState(
            {
                ingrediants : updatedIngredients,
                totalPrice : newPrice
            }
        )    
    }
    render() {
        let disabledInfo = {...this.state.ingrediants};
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        return(
            <Auxiliary>
                <Burger ingrediants = {this.state.ingrediants}/>
                <BuildControls  addIngredients={this.addIngredientsHandler} 
                                removeIngredients={this.removeIngredientsHandler} 
                                disabled={disabledInfo}
                                totalPrice={this.state.totalPrice}/>
            </Auxiliary>
        );
    }
}
export default BurgerBuilder;