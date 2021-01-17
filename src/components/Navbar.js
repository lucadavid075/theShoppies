import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.png'
import { useGlobalContext } from "../context";

const Navbar = () =>{

  const { nominations } = useGlobalContext();
 
    return (
      <nav className="navbar">
        <div className="nav-center">
          <Link to="/">
            <h2 className="nav-links">
              <i style={{ color: "blue" }}>the</i>Shoppies
              <img className="notif" src={logo} alt="" />
            </h2>
          </Link>
           <ul className="nav-links">
             <li>
              <Link to="/nominations">
                  <div className="nav-container">
                  <svg viewBox="0 0 24 24">
                    <g>
                      <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.533-.812-4.782-2.347-6.334-1.375-1.393-3.237-2.164-5.242-2.172h-.013c-2.004.008-3.866.78-5.242 2.172-1.534 1.553-2.367 3.802-2.346 6.333.037 4.332-2.02 5.967-2.102 6.03-.26.194-.366.53-.265.838s.39.515.713.515h4.494c.1 2.544 2.188 4.587 4.756 4.587s4.655-2.043 4.756-4.587h4.494c.324 0 .61-.208.712-.515s-.005-.644-.265-.837zM12 20.408c-1.466 0-2.657-1.147-2.756-2.588h5.512c-.1 1.44-1.29 2.587-2.756 2.587z"></path>
                    </g>
                  </svg>
                  <div className="amount-container">
                    <p className="total-amount">{nominations.length}</p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar