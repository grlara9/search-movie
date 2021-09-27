import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import MovieList from './components/MovieList'
import LikeMovies from './components/LikeMovies'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Search from './components/Search'
import './App.css';
import axios from 'axios'
const MOVIE_URl = "https://www.omdbapi.com/?s=avenger&apikey=709d62e0";


const App =()=> {
  const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(()=>{
   
    fetchItems()  
   },[])


   const fetchItems = async () => {
    setIsLoading(true)
    const promise =  await axios.get(MOVIE_URl)
    .then(promise =>{
      console.log("promise", promise)
      setMovies(promise.data.Search)
      setIsLoading(false)
    })
    .catch(err =>{
        setError(err)
        console.log("Error: ", err)
    })
    }

   useEffect(()=>{
      search();
   },[])

   const search = async (input) =>{
    setIsLoading(true) 
    axios.get(`https://www.omdbapi.com/?s=${input}&apikey=709d62e0`)
    .then(promise=>{
     
      setMovies(promise.data.Search)
      setIsLoading(false)
    })
    .catch(err =>{
      setError(err)
      console.log("Error: ", err)
  })
  }
  

  const addLikeMovies =(movie)=>{
    const newFavoriteList = [...favorites, movie];
    
		setFavorites(newFavoriteList);

    saveToLocalStorage(newFavoriteList)
  
 
  }

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  useEffect(() => {
	
    const json = localStorage.getItem('react-movie-app-favourites');
    const movieFavorites = JSON.parse(json) || []; // set default value here


		setFavorites(movieFavorites);
	}, []);

  
  const removeFavoriteMovie = (movie) => {
		const newFavoriteList = favorites.filter(
			(favorite) => favorite.imdbID !== movie.imdbID
		);

		setFavorites(newFavoriteList);
    }

return (
  <div className="container">
      <Router>
      <Navigation />
<main>
  <Switch>
    <Route path="/favorites">
      <LikeMovies favorites={favorites} removeFavoriteMovie={removeFavoriteMovie} isLoading={isLoading}/>
    </Route>
    <Route path="/">
      <Search search={search} />
      <MovieList  movies={movies} addLikeMovies={addLikeMovies} isLoading={isLoading} error={error} />
     </Route>
     </Switch>
     </main>
    </Router>
    </div>
);
};

export default App;
