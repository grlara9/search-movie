import React, { useReducer, useEffect } from 'react'
import Header from './components/Header'
import Movie from './components/MovieList'
import LikeMovies from './components/LikeMovies'

import Search from './components/Search'
import { initialState, reducer } from './hooks/reducer'
import './App.css';
import axios from 'axios'
const MOVIE_URl = "https://www.omdbapi.com/?s=man&apikey=709d62e0";


const App =()=> {

  const [state, dispatch] = useReducer(reducer, initialState)

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
  
  const addLikeMovies =(movie)=>{
   dispatch({
       type: "ADD_TO_FAVORITES",
       value: [movie]
   })
  }

  const {movies , errorMsj, loading} = state
  const retrievedMovies =
  loading && !errorMsj ? (
   <span>...Loading</span>
  ) : errorMsj ? (
    <div className="errorMessage">{errorMsj}</div>
  ) : (
    movies.map((movie, index) => (
      <Movie key={`${index}-${movie.Title}`} movie={movie} />
    ))
  );

return (
  <div className="App">
    <div className="m-container">
      <Header text="HOOKED" />

      <Search search={search} />

      <p className="App-intro">Sharing a few of our favourite movies</p>

      <div className="movies">{retrievedMovies}</div>
    </div>
  </div>
);
};

export default App;
