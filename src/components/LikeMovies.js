import React from 'react'
import Favorites from './Favorites'
import RemoveLike from './RemoveLike'
import Spinner from 'react-bootstrap/Spinner'


const LikeMovies = ({favorites, isLoading, removeFavoriteMovie }) =>{

   
    return isLoading  ?  (
      <Spinner animation="border" variant="light" style={{ margin:'auto', display:'block', marginTop:'12px'}} />
      ):(
        <section className="movies">
          {favorites.map((likes)=>(
            <Favorites  likes={likes} handleRemoveClick={removeFavoriteMovie} RemoveLike={RemoveLike}/> 
          ))}
        </section>
      )
}

export default LikeMovies