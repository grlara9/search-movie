import React from 'react'
import './Favorites.css'
import RemoveLike from './RemoveLike'

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg";

const Favorite = ({likes, handleRemoveClick}) =>{
  const poster =
  likes.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : likes.Poster;

    console.log("aSDF", likes)
    return(
        <>
      <div className="favorite__list">
       
          <div className="favorite">
          
          <h4>{likes.Title}</h4>
          
          <img 
          className="favorite__img"
          src={poster}
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