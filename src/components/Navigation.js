import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Navigation =()=>{

    const [open, setOpen] = useState(false)
    return(

        <nav className="navbar">
            <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={() => StereoPannerNode(false)}>
                        Home
                    </Link>
                    
                </li>

                <li className="nav-item">
                    <Link to="/favorites" className="nav-link"  onClick={() => StereoPannerNode(false)}>
                        Favorites
                    </Link>
                    
                </li>
            </ul>
        </nav>
    )
}

export default Navigation