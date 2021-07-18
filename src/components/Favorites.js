import React from 'react'
import './Favorites.css'
import RemoveLike from './RemoveLike'
const Favorite = ({likes, handleRemoveClick}) =>{
    console.log("aSDF", likes)
    return(
        <>
      <div className="favorite__list">
       
          <div className="favorite">
          
          <h4>{likes.Title}</h4>
          
          <img 
          className="favorite__img"
          src={likes.Poster}
          />
          
          <div className="overlay" onClick={()=>handleRemoveClick(likes)} >
          <RemoveLike />
          </div>
          
        </div>
      
     
    </div>
  </>
    )
}

export default Favorite