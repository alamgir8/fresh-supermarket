import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
<<<<<<< HEAD
import './Header.css'
=======
import './Header.css';
import icon from './../../img/grocery-cart (1).png'
>>>>>>> 033ecf5 (First commit)

const Header = () => {
    const [loggedInUser] = useContext(userContext);
    return (
<<<<<<< HEAD
        <section className="header bg-head sticky-top text-white">
        <nav id="navbar" className="navbar text-center navbar-expand-md">
            <div className="container">
                <Link to="/home" className="nav-link active px-3 text-white h2">Fresh Super Market</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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
    </section>
=======
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
    //     <section className="header bg-head sticky-top text-white">
    //     <nav id="navbar" className="navbar text-center navbar-expand-md">
    //         <div className="container">
    //             <Link to="/home" className="nav-link active px-3 text-white h2">Fresh Super Market</Link>
    //                 <button className="navbar-toggler navbar-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //                     <span className="navbar-toggler-icon "></span>
    //                 </button>
    //             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    //             <ul className="navbar-nav ml-auto mb-lg-0 nav justify-content-end">
    //                 <li className="nav-item pt-2">            
    //                     <Link to="/home" className="nav-link px-3 h6 text-white nav-button"> Home </Link>
    //                 </li>
    //                 <li className="nav-item pt-2">
    //                     <Link to='/orders' className="nav-link px-3 h6 text-white nav-button">Orders</Link>
    //                 </li>
    //                 <li className="nav-item pt-2">
    //                     <Link to="/admin" className="nav-link px-3 h6 nav-button text-white"> Admin </Link>
    //                 </li>
    //                 <li className="nav-item pt-2">
    //                     <p  className="nav-link active px-3 h6 nav-button"> Deals </p>
    //                 </li>
    //                 <li className="nav-item pt-2">
    //                     {loggedInUser.displayName ? <span className="nav-link active px-3 h6 text-white nav-button">{loggedInUser.displayName}</span>: <Link to="/login" className="nav-link active px-3 h6 text-white nav-button">Login</Link> }
    //                 </li>
    //             </ul>
    //             </div>
    //         </div>
    //     </nav>
    // </section>
>>>>>>> 033ecf5 (First commit)
    );
};

export default Header;