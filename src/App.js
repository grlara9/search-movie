import React from 'react'
import MovieList from './components/MovieList'
import LikeMovies from './components/LikeMovies'
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';

import './App.css';





const App =()=> {
return(
<Router>
  <Switch>
    <Route>
      <MovieList exact path="/" />
    </Route>
     <Route path="/Like">
        <LikeMovies />
      </Route>
  </Switch>
  </Router>
       
  );
}

export default App;
