import React, { useEffect, useState}  from 'react'
import {useStateValue} from '../context/stateProvider'
import axios from 'axios'
import LikeMovies from './LikeMovies'
import Header from './Header'
import Search from './Search'
import Movies from './Movies'
import AddLike from './AddLike'
const MOVIE_URl = "https://www.omdbapi.com/?s=man&apikey=709d62e0";

const MovieList = () =>{
    //const [likes, setLikes] = useState([])
    const [state, dispatch]= useStateValue();

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
      const {movies, loading, errorMsj} = state;           
      return (
      
        <div className="App">
         <div className="search__bar">
          <Search search={search} />
          </div>
      
       <main>
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          {loading && !errorMsj ? (
            <span>loading... </span>
          ) : errorMsj ? (
            <div className="errorMessage">{errorMsj}</div>
          ) : ( 
           <div className="row">
              <Movies movies={movies} 
              handleLikeClick={addLikeMovies} 
              AddLike={AddLike} />
          </div>
          )}

          
        </div>
        </main>
      </div>

      )}
export default MovieList