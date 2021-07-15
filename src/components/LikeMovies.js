import React from 'react'
import Favorites from './Favorites'
import Spinner from './Spinner';

const LikeMovies = ({favorites, loading , errorMsj,  removeFavoriteMovie }) =>{

   
    return loading && !errorMsj ?  (
        <Spinner />
      ): errorMsj ? (
        <div className="error__msj">{errorMsj}</div>
      ): (
        <section className="movies">
          {favorites.map((likes)=>(
                <Favorites  likes={likes} handleRemoveClick={removeFavoriteMovie} /> 
          ))}
        </section>
      )
}

export default LikeMovies