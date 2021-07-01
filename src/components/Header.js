import React from 'react'
import './Header.css'
const Header = (props) =>{
    return(
        <header className="movie__header">
           <h2>{props.title}</h2> 
        </header> 
    )
}
export default Header