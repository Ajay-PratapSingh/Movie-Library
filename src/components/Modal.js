import React, { Fragment } from "react";
import './Modal.css';
const Modal = (props) => {
    return (
        <Fragment>
            <div className="backdrop" onClick={props.OnClose}></div>
            <section className="modaloverlay">
                <h2>Title</h2>

                <h2>Description</h2>
                <button onClick={props.OnClose}> close </button>
            </section> 
        </Fragment>
    )
}
export default Modal;