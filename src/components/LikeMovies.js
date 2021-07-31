import React from 'react'
import Favorites from './Favorites'
import RemoveLike from './RemoveLike'
import Spinner from './Spinner';

const LikeMovies = ({favorites, isLoading, removeFavoriteMovie }) =>{

   
    return isLoading  ?  (
        <Spinner />
      ):(
        <section className="movies">
          {favorites.map((likes)=>(
                <Favorites  likes={likes} handleRemoveClick={removeFavoriteMovie} RemoveLike={RemoveLike}/> 
          ))}
        </section>
      )
}

export default LikeMovies