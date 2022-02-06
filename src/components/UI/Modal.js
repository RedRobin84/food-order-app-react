import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDom from "react-dom";


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>{props.children}</div>
}

const overlays = document.getElementById("overlays");

const Modal = (props) => {
    return <Fragment>
        {ReactDom.createPortal(<Backdrop onClick={props.onHideCart} />, overlays)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ ModalOverlay>, overlays)}
    </Fragment>
};

export default Modal;
