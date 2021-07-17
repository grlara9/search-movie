import React from 'react'
import './Movies.css'


//Here is your key: 709d62e0
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg";

const Movies =({movie, handleLikeClick, AddLike})=>{
  const poster =
  movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
   return(
     <>
      <div className="movie__list">
       
          <div className="movie">
          <h4>{movie.Title}</h4>
          {movie.id}
          <img 
          className="movie__img"
          src={poster}
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