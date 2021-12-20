import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Movies from './Movies'
import  AddLike from './AddLike'
import './MovieList.css'

const MovieList = ({movies, isLoading , addLikeMovies}) => {
 
  return isLoading ? (
    <Spinner animation="border" variant="light" style={{ margin:'auto', display:'block', marginTop:'12px'}} />
  ) :(
    <section className="movies">
      {movies.map((movie)=>(
        <Movies key={movie.imdbID} movie={movie} handleLikeClick={addLikeMovies} AddLike={AddLike}/>
      ))}
    </section>
  )
};
 

export default MovieList