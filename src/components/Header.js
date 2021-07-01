import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'

const Header = (props) =>{
    return(
        <header className="movie__header">
           <h2>{props.title}</h2> 


           <nav className="navigation__header-nav">
               <ul className="nav-links">
                   <li>
                       <NavLink exact to="/">Movies</NavLink>
                   </li>

                   <li>
                       <NavLink to="/favorites">Favorites</NavLink>
                   </li>
               </ul>
           </nav>
        </header> 
    )
}
export default Header