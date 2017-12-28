import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';
const burger = (props) => {
    const transformedIngrediants = [];
    for(var key in props.ingrediants) {
        for(var i =0; i < props.ingrediants[key]; i++)
            transformedIngrediants.push(<BurgerIngredient key={key + i} type={key}/>);
    }
    if(transformedIngrediants.length === 0) {
        transformedIngrediants.push(<p>Please start adding ingrediants</p>);

    }
    return(
        <div className={classes.Burger}> 
            <BurgerIngredient type="bread-top"/>
            {transformedIngrediants}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};
export default burger;