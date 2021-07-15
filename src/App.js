import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import LikeMovies from './components/LikeMovies'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Search from './components/Search'
//import { initialState, reducer } from './hooks/reducer'
import './App.css';
import axios from 'axios'
import Favorite from './components/Favorites'
const MOVIE_URl = "https://www.omdbapi.com/?s=man&apikey=709d62e0";


const App =()=> {
  const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	
 // const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(()=>{
    axios.get(MOVIE_URl)
    .then(promise => {
      console.log("promise", promise)
       setMovies(promise.data.Search)
        })
    .catch(err =>{
      console.log("Error: ", err)
    })
    
  },[])

  const search = input =>{
    axios.get(`https://www.omdbapi.com/?s=${input}&apikey=709d62e0`)
    .then(promise=>{
      setMovies(promise.data.Search)
    })
    .catch(err =>{
      console.log("Error: ", err)
  })
  }
 
  
  const addLikeMovies =(movie)=>{
    const newFavoriteList = [...favorites, movie];
		setFavorites(newFavoriteList);
  
 
  }

  
  const removeFavoriteMovie = (movie) => {
		const newFavoriteList = favorites.filter(
			(favorite) => favorite.imdbID !== movie.imdbID
		);

		setFavorites(newFavoriteList);
    }
  

  
  
  
  console.log("fghj", movies)
  




return (
  <Router>
    <div className="container">
      <Header title="Movie app" />
<main>
      <Search search={search} />

      <p className="App-intro">Sharing a few of our favourite movies</p>
    <Switch>
      <Route exact path="/">
     <MovieList  movies={movies} addLikeMovies={addLikeMovies}/>
     <LikeMovies favorite={Favorite} removeFavoriteMovie={removeFavoriteMovie} />
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
