import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';
import icon from './../../img/grocery-cart (1).png'

const Header = () => {
    const [loggedInUser] = useContext(userContext);
    return (
        <div className="header bg-head nav-section text-white sticky-top">
        <div className="container">
        <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                    <Link to="/home" className="nav-link active px-3 text-white h2">Fresh Super Market</Link>
                        <button className="navbar-toggler navbar-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                           <div className="py-2">
                                <img src={icon} alt="icon" className='img-fluid'/>
                           </div>
                            <ul className="navbar-nav ml-auto mb-lg-0 nav justify-content-end">
                                <li className="nav-item pt-2">            
                                    <Link to="/home" className="nav-link px-3 h6 text-white nav-button"> Home </Link>
                                </li>
                                <li className="nav-item pt-2">
                                    <Link to='/orders' className="nav-link px-3 h6 text-white nav-button">Orders</Link>
                                </li>
                                <li className="nav-item pt-2">
                                    <Link to="/admin" className="nav-link px-3 h6 nav-button text-white"> Admin </Link>
                                </li>
                                <li className="nav-item pt-2">
                                    <p  className="nav-link active px-3 h6 nav-button"> Deals </p>
                                </li>
                                <li className="nav-item pt-2">
                                    {loggedInUser.displayName ? <span className="nav-link active px-3 h6 text-white nav-button">{loggedInUser.displayName}</span>: <Link to="/login" className="nav-link active px-3 h6 text-white nav-button">Login</Link> }
                                </li>
                            </ul>
                        </div>
                    </div>
                    </nav>
           

        </div>
    </div>
   
    );
};

export default Header;