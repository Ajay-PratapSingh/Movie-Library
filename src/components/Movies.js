import React, { Fragment } from "react";
import MovieCard from "../components/MovieCard";
const Movies=(props)=>{
    const displayMovies= props.items;
    return(
    <Fragment>
        {displayMovies.length>0 && displayMovies.map((Moviesarr)=>
        <MovieCard
        onOpenModal={props.onopenmodal}
        Id={Moviesarr.id}
        Title={Moviesarr.original_title}
        Description={Moviesarr.overview}
        rating={Moviesarr.vote_average}
        releasedate={Moviesarr.release_date}
        poster={Moviesarr.poster_path}
        />)}
    </Fragment>
    )
}
export default Movies;