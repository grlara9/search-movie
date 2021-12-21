import React from 'react'
import './Movies.css'


//Here is your key: 709d62e0 
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg";

const Movies =(props)=>{

  const FavoriteComponent = props.favoriteComponent;
  
  //const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return(
    <>
     {props.movies.map((movie, index) =>(
       
       <div className="movie__list">
       <div className="movie">
        <h4>{movie.Title}</h4>
        {movie.id}
        <img 
        className="movie__img"
        src={movie.Poster}
        />
        <div className="overlay" onClick={()=>props.handleFavoriteClick(movie)} >
            <FavoriteComponent />
          </div>
        </div> 
      
     
    </div>
        ))}
  </>
    )
}
export default Movies