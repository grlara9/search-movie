import React from 'react'
import Favorites from './Favorites'
import Spinner from './Spinner';

const LikeMovies = ({like, loading , errorMsj,  removeFavorites }) =>{

   
    return loading && !errorMsj ?  (
        <Spinner />
      ): errorMsj ? (
        <div className="error__msj">{errorMsj}</div>
      ): (
        <section className="movies">
          {like.map((likes)=>(
                <Favorites likes={likes} handleRemoveClick={removeFavorites} /> 
          ))}
        </section>
      )
}

export default LikeMovies