import React from 'react'

const LikeMovies = (props) =>{
    return(
        <div className="hola">
        <h1>save page</h1>

        {props.likes.map(like=>{
            <h2>{like.Title}</h2>
            console.log("like", like)

        })}
        </div>
    )
}

export default LikeMovies