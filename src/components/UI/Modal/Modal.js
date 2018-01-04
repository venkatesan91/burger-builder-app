import React, {Component} from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.orderClicked !== this.props.orderClicked)
            return true;
    }
    render() {
        return(
            <Auxiliary>
                <Backdrop orderClicked={this.props.orderClicked} clicked={this.props.modalClosed} />
                <div    className={classes.Modal} 
                        style={{
                            transform : this.props.orderClicked ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity : this.props.orderClicked ? '1' : '0'
                        }}
                >
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }    
}
export default Modal;