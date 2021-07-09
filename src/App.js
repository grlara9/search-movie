import React, { useReducer, useEffect } from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import LikeMovies from './components/LikeMovies'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
    .catch(dispatch({
      type: "SEARCH_MOVIES_FAILURE",
      errorMsj: "could not find"

    }))
  }

  const saveTolocalStorage =(items) =>{
    localStorage.setItem('movie-app-favorites', JSON.stringify(items));
  }

  
  const addLikeMovies =(movie)=>{
   
   dispatch({
       type: "ADD_TO_FAVORITES",
       value: [...like, movie]
   })
 
  }

  const removeFavorites = (id) =>{
    dispatch({
      type:"REMOVE_FROM_FAVORITES",
      value: id
    })
  }

  

  const { movies, errorMessage, loading, like } = state;
  
  
  console.log("fghj", movies)
  console.log("likes", like)
saveTolocalStorage(like)


useEffect(() => {
  const movieFavorites = JSON.parse(
    localStorage.getItem('movie-app-favorites')
  );

  if (movieFavorites) {
    //setFavourites(movieFavourites);
    dispatch({
      type: "ADD_TO_FAVORITES",
      value: [ movieFavorites]
  })

  }
}, []);
return (
  <Router>
    <div className="container">
      <Header title="Movie app" />
<main>
      <Search search={search} />

      <p className="App-intro">Sharing a few of our favourite movies</p>
    <Switch>
      <Route exact path="/">
     <MovieList loading={loading} movies={movies} addLikeMovies={addLikeMovies}/>
     <LikeMovies like={like} removeFavorites={removeFavorites}/>
     </Route>

     <Route path="/favorite">
     </Route>
     </Switch>
     </main>
    </div>
    </Router>
);
};

export default App;
