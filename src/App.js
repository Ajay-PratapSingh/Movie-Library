import React, { Fragment, useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Movies from './components/Movies';
import MovieFilter from './components/MovieFilter';
import Favourites from './components/Favourites';
import Modal from './components/Modal';
import './App.css';
import Pagination from './components/Pagination';


function App() {

  const [Moviesarr, setMoviesarr] = useState([]);
  const [pages, setPages] = useState('');
  const [showModal, setModal] = useState(false);

  //modal states----------------
  const [modalTitle, setmodalTitle] = useState();
  const [modalDescription, setmodalDescription] = useState();
  const [modalPoster, setmodalPoster] = useState();
  const [modalReleasedate, setmodalReleasedate] = useState();
  const [modalRating, setmodalRating] = useState();
  //----------------------------------

  const searchResultHandler = (data) => {
    console.log(data);
    setMoviesarr([...data.results]);
    setPages(data.total_pages);
  };

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API}`
    const response = await fetch(url);
    const responsejson = await response.json();
    setMoviesarr(responsejson.results);
  }

  useEffect(() => {
    getMovieRequest();
  }, [])

  const ShowModalHandler = async (Id) => {
    const url=`https://api.themoviedb.org/3/movie/${Id}?api_key=${process.env.REACT_APP_API}`;
    const response = await fetch(url);
    const responsejson = await response.json();
    console.log(responsejson);
    setmodalTitle(responsejson.original_title);
    setmodalDescription(responsejson.overview);
    setmodalPoster(responsejson.backdrop_path);
    setmodalRating(responsejson.vote_average);
    setmodalReleasedate(responsejson.release_date);
    setModal(true);
  }

  const HideModalHandler = () => {
    setModal(false);
  }

  console.log(Moviesarr);

  return (
    <Fragment>
        {showModal && <Modal OnClose={HideModalHandler} 
            title= {modalTitle}
            description = {modalDescription}
            poster = {modalPoster}
            rating = {modalRating}
            releasedate= {modalReleasedate}
        />}

        <article className='container'>

          <section className='header-area'>
            <SearchBar api_key={process.env.REACT_APP_API}
              onsearch={searchResultHandler}></SearchBar>
          </section>


          <aside className='filter-area'>
            <MovieFilter></MovieFilter>
            <Favourites></Favourites>
          </aside>
          <div><h1 className='h1'>Top Rated Movies</h1></div>
          <article className='list-area'>

            <Movies items={Moviesarr} onopenmodal={ShowModalHandler}/>

            <section className='pgn'>
              <Pagination totalpages={pages}></Pagination>
            </section>

          </article>
        </article>
    </Fragment>
  );
}

export default App;
