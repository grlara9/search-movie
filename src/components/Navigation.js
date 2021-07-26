import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FiMenu, FiX} from 'react-icons/fi'
import './Header.css'

const Navigation =()=>{

    const [open, setOpen] = useState(false)

    const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

    return(

        <nav className="navbar">
            <div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>

            <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={closeMenu}>
                        Home
                    </Link>
                    
                </li>

                <li className="nav-item">
                    <Link to="/favorites" className="nav-link"  onClick={closeMenu}>
                        Favorites
                    </Link>
                    
                </li>
            </ul>
        </nav>
    )
}

export default Navigation