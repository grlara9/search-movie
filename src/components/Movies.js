import React from 'react'
import './Movies.css'


//Here is your key: 709d62e0

const Movies =({movie, handleLikeClick, AddLike})=>{
  
   return(
     <>
      <div className="movie__list">
       
          <div className="movie">
          <h4>{movie.Title}</h4>
          {movie.id}
          <img 
          className="movie__img"
          src={movie.Poster}
          />
          
          <div className="overlay" onClick={()=>handleLikeClick(movie)} >
            <AddLike />
          </div>
        </div>
      
     
    </div>
  </>
    )
}
export default Movies