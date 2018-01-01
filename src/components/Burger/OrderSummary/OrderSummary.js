import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    //alert("***"+props.ingredients);
    const ingredients = props.ingredients;
    let ingredientList = [];
    for(var i in ingredients) {
        //alert("&&&"+i);
        ingredientList.push(<li key={i}>{i} : {ingredients[i]}</li>);
    }
    return(
        <Auxiliary>
            <h3>Your Order :</h3>
            <p>A delicious burger with the following ingredients :</p>
            <ul>
                {ingredientList}
            </ul>
            <p><strong>Price : {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Success" clicked={props.orderContinue}>Continue</Button>
            <Button btnType="Danger" clicked={props.orderCancel}>Cancel</Button>
        </Auxiliary>
    )
}
export default orderSummary;