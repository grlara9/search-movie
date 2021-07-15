import React from 'react'
import Favorites from './Favorites'
import Spinner from './Spinner';

const LikeMovies = ({favorite, loading , errorMsj,  removeFavorites }) =>{

   
    return  !errorMsj ?  (
        <Spinner />
      ): errorMsj ? (
        <div className="error__msj">{errorMsj}</div>
      ): (
        <section className="movies">
          {favorite.map((likes)=>(
                <Favorites  likes={likes} handleRemoveClick={removeFavorites} /> 
          ))}
        </section>
      )
}

export default LikeMovies