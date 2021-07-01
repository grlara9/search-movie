import React from 'react'
import {useStateValue} from '../context/stateProvider'

const LikeMovies = (props) =>{

    const [state, dispatch]= useStateValue();

    const {value} = state; 
    return(
        <div className="hola">
        <h1>save page</h1>

        {props.value.map(likes=>{
            <h2>{likes.Title}</h2>
            console.log("like", likes)

        })}
        </div>
    )
}

export default LikeMovies