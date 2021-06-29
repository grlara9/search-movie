import React from 'react'
import './Movies.css'
//Here is your key: 709d62e0

const Movies =(props)=>{
  const AddLike = props.AddLike; 
   return(
     <>
      <div className="movie__list">
        {props.movies.map(movie => (
          <div className="movie">
          <h4>{movie.Title}</h4>
          {movie.id}
          <img 
          className="movie__img"
          src={movie.Poster}
          />
          
          <div className="overlay" onClick={()=>props.handleLikeClick(movie)} >
            <AddLike />
          </div>
        </div>
      
      ))
    }
    </div>
  </>
    )
}
export default Movies