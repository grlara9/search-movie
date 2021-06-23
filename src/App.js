import React, { useEffect} from 'react'
import {useStateValue} from './context/stateProvider'
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import Search from './components/Search'
import Movies from './components/Movies'
import AddLike from './components/AddLike'
const MOVIE_URl = "https://www.omdbapi.com/?s=man&apikey=709d62e0";



const App =()=> {

const [state, dispatch]= useStateValue();
 console.log("movies",state.movies)

  useEffect(()=>{
    axios.get(MOVIE_URl)
    .then(promise => {
      console.log("promise", promise)
     dispatch({
       type:"SEARCH_MOVIES_SUCCESS",
       payload:promise.data.Search
      })
    })
    .catch(err =>{
      console.log("Error: ", err)
    })
    
  },[])

  const search = input =>{
    axios.get(`https://www.omdbapi.com/?s=${input}&apikey=709d62e0`)
    .then(promise=>{
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: promise.data.Search
      })
    })

  }
  
  const {movies, loading, errorMsj} = state;           
  return (
    <div className="App">
   <Header>
     <h2>Movies</h2>
     <div className="search__bar">
      <Search search={search} />
      </div>
   </Header>
   <main>
    <p className="App-intro">Sharing a few of our favourite movies</p>
    <div className="movies">
      {loading && !errorMsj ? (
        <span>loading... </span>
      ) : errorMsj ? (
        <div className="errorMessage">{errorMsj}</div>
      ) : (
       <div className="row">
          <Movies movies={movies} AddLike={AddLike} />
      </div>
      )}
    </div>
    </main>
  </div>
  );
}

export default App;
