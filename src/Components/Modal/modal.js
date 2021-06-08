import { Fragment } from "react";

import Backdrop from './Backdrop';

const Modal = props => {
    return(
        <Fragment>
            <div
            className="Modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' ,
                opacity: props.show ? '1' : '0'
            }} >
                {props.children}
            </div>
            <Backdrop show={props.show} clicked={props.clicked} />
        </Fragment>
    );
}

export default Modal;