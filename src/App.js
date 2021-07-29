import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import MovieList from './components/MovieList'
import LikeMovies from './components/LikeMovies'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Search from './components/Search'
//import { initialState, reducer } from './hooks/reducer'
import './App.css';
import axios from 'axios'
const MOVIE_URl = "https://www.omdbapi.com/?s=avenrs&apikey=709d62e0";


const App =()=> {
  const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
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
        },
        (error) =>{
          setIsLoading(false)
          setError(error)
        }
        
        )
   
    
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
console.log("el error es", error)
return (
  <div className="container">
      <Router>
      <Navigation />
<main>
      <Search search={search} />

    <Switch>
      <Route exact path="/">
        <MovieList  movies={movies} addLikeMovies={addLikeMovies} isLoading={isLoading} error={error}/>
     </Route>

     <Route path="/favorites">
        <LikeMovies favorites={favorites} removeFavoriteMovie={removeFavoriteMovie} />
     </Route>
     </Switch>
     </main>
    </Router>
    </div>
);
};

export default App;
