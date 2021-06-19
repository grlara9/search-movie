import React, { useEffect, useReducer} from 'react'
import {useStateValue} from './context/stateProvider'
import axios from 'axios'
import './App.css';
import Search from './components/Search'
import Movies from './components/Movies'

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
   
    <Search search={search} />
    <p className="App-intro">Sharing a few of our favourite movies</p>
    <div className="movies">
      {loading && !errorMsj ? (
        <span>loading... </span>
      ) : errorMsj ? (
        <div className="errorMessage">{errorMsj}</div>
      ) : (
        movies.map(movie => (
          <div className="movie-app">
            <div className="row">
              <Movies
              
                Title={movie.Title}
                Poster={movie.Poster}
                
                />
            </div>
          </div>
        ))
      )}
    </div>
  </div>
  );
}

export default App;
