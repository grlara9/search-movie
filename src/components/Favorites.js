import React from 'react'

const Favorite = ({likes}) =>{
    console.log("aSDF", likes)
    return(
        <>
      <div className="favorite__list">
       
          <div className="favorite">
          <h4>{likes.Title}</h4>
          {likes.id}
          <img 
          className="movie__img"
          src={likes.Poster}
          />
          
          
        </div>
      
     
    </div>
  </>
    )
}

export default Favorite