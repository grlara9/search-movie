import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import MovieList from './components/MovieList'
import LikeMovies from './components/LikeMovies'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Search from './components/Search'
import  AddLike from './components/AddLike'
import RemoveLike from './components/RemoveLike'
import './App.css';
import axios from 'axios'
const MOVIE_URl = "https://www.omdbapi.com/?";
const KEY= "709d62e0"

const App =()=> {
  const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
   const fetchItems = async () => {
    setIsLoading(true)
    const promise =  await axios.get(MOVIE_URl,{
      params: {apikey: KEY, s: 'avenger'}
    })
      setMovies(promise.data.Search)
      setIsLoading(false)
    }
    
    const search = async (input) =>{
      setIsLoading(true) 
     const res = await axios.get(`https://www.omdbapi.com/?s=${input}&apikey=${KEY}`)
      setMovies(res.data.Search)
        setIsLoading(false)
     
    }

  useEffect(()=>{
    fetchItems()  
  },[])

  useEffect(()=>{
    search();
   },[])

   
  

 

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  useEffect(() => {
	
    const json = localStorage.getItem('react-movie-app-favourites');
    const movieFavorites = JSON.parse(json) || []; // set default value here


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
  <div className="container">
      <Router>
      <Navigation />
<main>
  <Switch>
    <Route path="/favorites">
      <MovieList movies={favorites} handleFavoriteClick={removeFavoriteMovie} isLoading={isLoading} favouriteComponent={AddLike}/>
    </Route>
    <Route path="/">
      <Search search={search} />
      <MovieList movies={movies} handleFavoriteClick={addLikeMovies} isLoading={isLoading} favouriteComponent={RemoveLike} />
     </Route>
     </Switch>
     </main>
    </Router>
    </div>
);
};

export default App;
