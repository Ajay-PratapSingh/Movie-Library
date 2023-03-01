import React, { useState } from 'react';
import './Searchbar.css';
const SearchBar=(props)=>{
    const[searchquery,setsearchquery]=useState('');

    const searchChangeHandler=(event)=>{
        setsearchquery(event.target.value);
    }

    const searchHandler=(event)=>{
        event.preventDefault();
        if(searchquery===""){
            return ;
        }
        const query=searchquery;
        console.log(query);
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${props.api_key}&query=${query}`)
        .then(data=>data.json())
        .then(data=>{props.onsearch(data)})
        console.log(query);
        setsearchquery('');
    };

    return(

        <form className='search-bar'>
            <input type="text" placeholder="search" value={searchquery} onChange={searchChangeHandler}></input>
            <button type="submit" onClick={searchHandler}></button>
        </form>
    )
}
export default SearchBar;