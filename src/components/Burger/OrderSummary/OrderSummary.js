import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
const orderSummary = (props) => {
    //alert("***"+props.ingredients);
    const ingredients = props.ingredients;
    let ingredientList = [];
    for(var i in ingredients) {
        //alert("&&&"+i);
        ingredientList.push(<li>{i} : {ingredients[i]}</li>);
    }
    return(
        <Auxiliary>
            <h3>Your Order :</h3>
            <p>A delicious burger with the following ingredients :</p>
            <ul>
                {ingredientList}
            </ul>
        </Auxiliary>
    )
}
export default orderSummary;