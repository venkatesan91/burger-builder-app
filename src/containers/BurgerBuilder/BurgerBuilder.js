import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component {
    state = {
        ingrediants : {
            salad : 1,
            bacon : 1,
            cheese : 2,
            meat : 1
        }
    }
    render() {
        return(
            <Auxiliary>
                <Burger ingrediants = {this.state.ingrediants}/>
                <div>Build Controls</div>
            </Auxiliary>
        );
    }
}
export default BurgerBuilder;