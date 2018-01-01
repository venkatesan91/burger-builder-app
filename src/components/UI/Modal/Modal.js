import React from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
const modal = (props) => (
    <Auxiliary>
        <Backdrop orderClicked={props.orderClicked} clicked={props.modalClosed} />
        <div    className={classes.Modal} 
                style={{
                    transform : props.orderClicked ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity : props.orderClicked ? '1' : '0'
                }}
        >
            {props.children}
        </div>
    </Auxiliary>
)
export default modal;