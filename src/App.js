import React, { Fragment, useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Movies from './components/Movies';
import Favourites from './components/Favourites';
import MovieModal from './components/MovieModal';
import MoviePagination from './components/MoviePagination';
import "./App.css";


function App() {

  const [Moviesarr, setMoviesarr] = useState([]);
  const [pages, setPages] = useState('');
  const [showModal, setModal] = useState(false);
  const [query,setQuery]=useState("");

  //------------search----------------------

  const searchResultHandler = (data) => {
    console.log(data);
    setMoviesarr([...data.results]);
    setPages(data.total_pages);
  };
  //-----------------------------------------------------
  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API}`
    const response = await fetch(url);
    const responsejson = await response.json();
    setMoviesarr(responsejson.results);
  }

  useEffect(() => {
    getMovieRequest();
  },[])

  //------------pagination---------------------------------
  const pageChangeHandler=async(page)=>{
    var url;
    if(query!==""){
      url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&query=${query}&page=${page}`
    }
    else{
      url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API}&page=${page}`
    }
    const response = await fetch(url);
    const responsejson = await response.json();
    setMoviesarr(responsejson.results);
  }
  //---------------------modal---------------------------------------
  const ShowModalHandler=() => {
    setModal(true);
  }

  const HideModalHandler = () => {
    setModal(false);
  }

  console.log(Moviesarr);

  return (
    <Fragment>
        {showModal && <MovieModal OnClose={HideModalHandler}/>}
        <article className='maincontainer'>

          <section className='header-area'>
            <SearchBar api_key={process.env.REACT_APP_API}
              onsearch={searchResultHandler} sq={setQuery}></SearchBar>
          </section>
          <article className='list-area' >
            
            <Movies items={Moviesarr} onopenmodal={ShowModalHandler}/>
          </article>
          <section className='pagination'>
              <MoviePagination totalpages={pages} pageHandler={pageChangeHandler}></MoviePagination>
          </section>
          <aside className='favourite-area'>
            <div className='favouritelist'>
            <Favourites></Favourites>
            </div>
          </aside>
        </article>
    </Fragment>
  );
}

export default App;
