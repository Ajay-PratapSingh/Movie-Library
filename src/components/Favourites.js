import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from 'react-bootstrap';

const Favourites = () => {
    const favarr = useSelector(state => state.favourites.favourites);
    console.log(favarr);
    return (
        <ListGroup>
            <h2>Favourites</h2>
            {favarr.map((ele) => (
                <ListGroup.Item style={{minWidth:"250px"}} key={1}>{ele}</ListGroup.Item>
            ))}
        </ListGroup>
    )
}
export default Favourites;