import React from 'react'

const Favorite = ({likes}) =>{
    console.log("aSDF", likes)
    return(
        <div className="favorite">
           {likes.Title}
            <h1>Hola</h1>
        </div>
    )
}

export default Favorite