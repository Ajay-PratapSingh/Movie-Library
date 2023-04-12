import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { favouriteActions, modalActions } from '../store/index';

const MovieCard=(props)=> {

    const dispatch=useDispatch();

    const detailHandler=()=>{
        dispatch(modalActions.setModal({
          title:props.Title,
          id:props.Id,
          releasedate:props.releasedate,
          rating:props.rating,
          poster:props.poster,
          description:props.Description}))
        props.onOpenModal();
    }

    const addFavoriteHandler=()=>{
        dispatch(favouriteActions.addFavorite({name:props.Title,id:props.Id}));
    }



    return (

        <Card style={{ width: '18rem',margin:"10px" }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.poster}`} />
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Text>
                {props.rating+"  "}
                {props.releasedate}
          </Card.Text>
          <Button variant="primary" onClick={detailHandler}>Details</Button>{' '}
          <Button variant="secondary" onClick={addFavoriteHandler}>Favorite</Button>
        </Card.Body>
      </Card>

    )}


export default MovieCard;