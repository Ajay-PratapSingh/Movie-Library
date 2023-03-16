import React from 'react';
import './Card.css';

const Card=(props)=> {

    const detailHandler=()=>{
        props.onOpenModal(props.Id);
    }

    return (
        <div className="card" style={{
          }}>
            <header className='header'>
                <h2>{props.Title}</h2>
            </header>

            <section className='card_img'>
                <img src={`https://image.tmdb.org/t/p/w500/${props.poster}`} alt="" className='poster'></img>
            </section>


            <section className='rating_date'>
                <p className='p'> {props.rating} </p>
                <h4 className='h4'> {props.releasedate} </h4>
            </section> 

            <section>
                <button onClick={detailHandler}>Details</button>
                <button>Favorite</button>
            </section>
        </div>
    )}


export default Card;