import React, {useState} from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = (props) =>{
    const [open, setOpen] = useState(false)
    return(
        <header className="movie__header">

           <Link to="/" className="nav-link" onClick={() => setOpen(false)}><h2>{props.title}</h2> </Link>

            <Navigation />  
            
          
        </header> 
    )
}
export default Header