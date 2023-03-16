import React, { Fragment } from "react";
import './Modal.css';
const Modal = (props) => {
    return (
        <Fragment>
            <div className="backdrop" onClick={props.OnClose}></div>
            <section className="modaloverlay">
                <button onClick={props.OnClose}> close </button>
                <section className="modal-poster">
                <img src={`http://image.tmdb.org/t/p/w500/${props.poster}`} alt="poster" className="poster"></img>
                </section>
                <section>
                    <h2 className="title">{props.title}</h2>
                </section>
                <section>
                    <p className="desc">{props.description}</p>
                </section>
                <section>
                <h1>{props.releasedate}</h1>
                <h1>{props.rating}</h1>
                </section>
            </section> 
        </Fragment>
    )
}
export default Modal;