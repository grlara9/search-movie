import React from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import LikeMovies from './components/LikeMovies'
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import Search from './components/Search'
import './App.css';





const App =()=> {
return(
<Router>
  <Header title="Movie App" />
  <div className="container">
  <Switch>
    <Route>
      <MovieList exact path="/" />
    </Route>
     <Route path="/Like">
        <LikeMovies />
      </Route>
  </Switch>
  </div>
  </Router>
       
  );
}

export default App;
