import React from 'react'
import Spinner from './Spinner'
import Movies from './Movies'
import  AddLike from './AddLike'
import './MovieList.css'

const MovieList = ({movies, isLoading , addLikeMovies}) => {
 
  return isLoading ? (
  <Spinner />
  ) :(
    <section className="movies">
      {movies.map((movie)=>(
        <Movies key={movie.id} movie={movie} handleLikeClick={addLikeMovies} AddLike={AddLike}/>
      ))}
    </section>
  )
   
  
};


export default MovieList