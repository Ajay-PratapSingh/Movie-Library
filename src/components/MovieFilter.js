import './MovieFilter.css';
import React, { useState } from 'react';
const MovieFilter = (props) => {

    const [genrequery,setGenrequery]=useState('');


    const filterHandler=(event)=>{
        setGenrequery(event.target.value);
        event.preventDefault();
        const Gquery=genrequery;
        console.log(Gquery);
        setGenrequery('');
    }


    return (
        <button className="dropbtn">Genre filter
            <select class="dropdown-content" onChange={filterHandler}>
                <option value='Action'>Action</option>
                <option value='Horror'>Horror</option>
                <option value='Comedy'>Comedy</option>
                <option value='Western'>Western</option>
                <option value='Sci-fi'>Sci-fi</option>
                <option value='Thriller'>Thriller</option>
                <option value='Drama'>Drama</option>
                <option value='Fantasy'>Fantasy</option>
            </select>
        </button>
        
    )
}
export default MovieFilter; 