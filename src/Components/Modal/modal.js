import { Fragment } from "react";

import Backdrop from './Backdrop';

const Modal = props => {

    return(
        <Fragment>
            <div
            className="Modal"
            style={{
                transform: props.show ? 'translate(-50%, -50%)' : 'translate(-50%, -100%)' ,
                opacity: props.show ? '1' : '0'
            }} >
                {props.children}
            </div>
            <Backdrop show={props.show} clicked={props.clicked} />
        </Fragment>
    );
}

export default Modal;