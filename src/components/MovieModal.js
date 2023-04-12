import React, { Fragment} from "react";
import './MovieModal.css';
import { useSelector } from "react-redux";
const MovieModal = (props) => {
    const movie_id = useSelector(state => state.modal.modalId);
    const title = useSelector(state => state.modal.modalTitle);
    const description = useSelector(state => state.modal.modalDescription);
    const releasedate = useSelector(state => state.modal.modalReleasedate);
    const rating = useSelector(state => state.modal.modalRating);
    const poster=useSelector(state=>state.modal.modalPoster);
    return (
        <Fragment>
            <div className="backdrop" onClick={props.OnClose}></div>
            <section className="modaloverlay" id="style-2">
                <button onClick={props.OnClose}> close </button> 
                
                <section>
                    <h2 className="title">{title}</h2>
                </section>

                <section>
                    <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt="poster" className="modal-img"></img>
                </section>

                <section>
                    <p className="desc">{description}</p>
                </section>
                <section>
                    <h1>{releasedate}</h1>
                    <h1>{rating}</h1>
                </section>
            </section>
        </Fragment>
    )
}
export default MovieModal;