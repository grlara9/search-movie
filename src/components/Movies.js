import React from 'react'
import './Movies.css'
//Here is your key: 709d62e0

const Movies =(props)=>{
  const AddLike = props.AddLike;
  return(
  
      <div className="row__movies">
        {props.movies.map(movie => (
          <>
          <img src={movie.Poster} />
          <div onClick={()=>props.handleLikeClick(movie)} className="overlay">
            <AddLike />
          </div>
       </>
      
    ))
     }
     </div>
  
    )
}
export default Movies