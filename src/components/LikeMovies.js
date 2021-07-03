import React from 'react'
import Spinner from './Spinner';

const LikeMovies = (like, loading , errorMsj) =>{

   
    return loading && !errorMsj ?  (
        <Spinner />
      ): errorMsj ? (
        <div className="error__msj">{errorMsj}</div>
      ): (
        <section className="movies">
          {like.map((likes)=>(
           console.log("asdfghjkl", likes)
          ))}
        </section>
      )
}

export default LikeMovies