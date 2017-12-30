import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
const controlArray = [
    {label : 'Salad', type : 'salad'},
    {label : 'Cheese', type : 'cheese'},
    {label : 'Meat', type : 'meat'},
    {label : 'Bacon', type : 'bacon'},
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price : <strong>{props.totalPrice}</strong></p>
        {controlArray.map(ctrl => (
            <BuildControl   key={ctrl.label} 
                            label={ctrl.label} 
                            added={() => props.addIngredients(ctrl.type)}
                            removed={() => props.removeIngredients(ctrl.type)}
                            disabled={props.disabled[ctrl.type]}
                         />
        ))}
    </div>
);
export default buildControls;