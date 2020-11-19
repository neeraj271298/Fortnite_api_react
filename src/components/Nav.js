import React from 'react';
import { Link ,NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav>
            <h2> <NavLink to="/"  className="navLink" style={{ fontWeight: "bold", color: "red" }} >FORTNITE</NavLink></h2>
            <ul className="navItem" >
                <li>
                <Link to="/"  className="navLink" > Home </Link>
                </li>
                <li>
                <Link to="/about"  className="navLink" > About </Link>
                </li>
                <li> 
                <Link className="navLink"  to="/shop">Shop</Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Nav
