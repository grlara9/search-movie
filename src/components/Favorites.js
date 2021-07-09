import React from 'react'
import './Favorites.css'

const Favorite = ({likes, handleRemoveClick}) =>{
    console.log("aSDF", likes)
    return(
        <>
      <div className="favorite__list">
       
          <div className="favorite">
          <h4>{likes.Title}</h4>
          {likes.id}
          <img 
          className="favorite__img"
          src={likes.Poster}
          />
          
          <div className="overlay" onClick={()=>handleRemoveClick(likes)} >
           
          </div>
          
        </div>
      
     
    </div>
  </>
    )
}

export default Favorite