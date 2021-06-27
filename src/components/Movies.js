import React from 'react'
import './Movies.css'
//Here is your key: 709d62e0

const Movies =(props)=>{
  const AddLike = props.AddLike; 
   return(
     <>
      <div className="movies__list">
        {props.movies.map(movie => (
          <div className="movies">
          <h4>{movie.Title}</h4>
          <img src={movie.Poster} />
          <div onClick={()=>props.handleLikeClick(movie)} className="overlay">
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