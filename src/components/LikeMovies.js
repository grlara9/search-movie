import React from 'react'
import Favorites from './Favorites'
import RemoveLike from './RemoveLike'
import Spinner from './Spinner';

const LikeMovies = ({favorites, loading , errorMsj,  removeFavoriteMovie }) =>{

   
    return loading && !errorMsj ?  (
        <Spinner />
      ): errorMsj ? (
        <div className="error__msj">{errorMsj}</div>
      ): (
        <section className="movies">
          {favorites.map((likes)=>(
                <Favorites  likes={likes} handleRemoveClick={removeFavoriteMovie} RemoveLike={RemoveLike}/> 
          ))}
        </section>
      )
}

export default LikeMovies