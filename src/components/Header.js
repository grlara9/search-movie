import React from 'react'
import Navigation from './Navigation'
import './Header.css'

const Header = (props) =>{
    return(
        <header className="movie__header">
           <h2>{props.title}</h2> 

            <Navigation />  
            
          
        </header> 
    )
}
export default Header