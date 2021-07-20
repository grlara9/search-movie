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
	const [isLoading, setIsLoading] = useState(true)
 // const [state, dispatch] = useReducer(reducer, initialState)


 const saveToLocalStorage = (items) => {
  localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
};

  useEffect(()=>{
    setIsLoading(true)
    axios.get(MOVIE_URl)
    .then(promise => {
      console.log("promise", promise)
       setMovies(promise.data.Search)
       setIsLoading(false)
        })
    .catch(err =>{
      console.log("Error: ", err)
    })
    
  },[])

  const search = input =>{
    setIsLoading(true)
    axios.get(`https://www.omdbapi.com/?s=${input}&apikey=709d62e0`)
    .then(promise=>{
      setMovies(promise.data.Search)
      setIsLoading(false)
    })
    .catch(err =>{
      console.log("Error: ", err)
  })
  }

  useEffect(() => {
		const movieFavorites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		setFavorites(movieFavorites);
	}, []);

 
  
  const addLikeMovies =(movie)=>{
    const newFavoriteList = [...favorites, movie];
		setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList)
  
 
  }

  
  const removeFavoriteMovie = (movie) => {
		const newFavoriteList = favorites.filter(
			(favorite) => favorite.imdbID !== movie.imdbID
		);

		setFavorites(newFavoriteList);
    }

return (
  <Router>
    <div className="container">
      <Header title="Movie app" />
<main>
      <Search search={search} />

    <Switch>
      <Route exact path="/">
     <MovieList  movies={movies} addLikeMovies={addLikeMovies} isLoading={isLoading}/>
     </Route>

     <Route path="/favorite">
        <LikeMovies favorites={favorites} removeFavoriteMovie={removeFavoriteMovie} />
     </Route>
     </Switch>
     </main>
    </div>
    </Router>
);
};

export default App;
