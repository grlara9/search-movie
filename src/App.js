import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import MovieList from './components/MovieList'
import LikeMovies from './components/LikeMovies'
import Movies from './components/Movies'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Search from './components/Search'
import  AddLike from './components/AddLike'
import RemoveLike from './components/RemoveLike'
import './App.css';
import axios from 'axios'
import useMovies from './hooks/useMovies'


const App =()=> {
    const {  movies, isLoading, favorites, error} = useMovies()

  
return (
  <div className="container">
      <Router>
      <Navigation />
<main>
  <Switch>
    <Route path="/favorites">
      <Movies movies={favorites} handleFavoriteClick={removeFavoriteMovie} isLoading={isLoading} favoriteComponent={RemoveLike}/>
    </Route>
    <Route path="/">
      <Search search={search} />
      <Movies movies={movies} handleFavoriteClick={addLikeMovies} isLoading={isLoading} favoriteComponent={AddLike} />
     </Route>
     </Switch>
     </main>
    </Router>
    </div>
);
};

export default App;
