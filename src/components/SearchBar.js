import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = (props) => {
    const [searchquery, setsearchquery] = useState('');

    const handleChange = (event) => {
        setsearchquery(event.target.value);
    }

    const searchHandler = (event) => {
        event.preventDefault();
        if (searchquery === "") {
            return;
        }
        const query = searchquery;
        props.sq(query);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${props.api_key}&query=${query}`)
            .then(data => data.json())
            .then(data => { props.onsearch(data) })
        setsearchquery('');
    };

    return (

        <Form onSubmit={searchHandler}>
            <Form.Group controlId="formBasicEmail">
                <Form.Control
                    type="text"
                    placeholder="Search"
                    value={searchquery}
                    onChange={handleChange}
                    style={{ minWidth:'350px'}}
                />
            </Form.Group>
        </Form>
    )
}
export default SearchBar;