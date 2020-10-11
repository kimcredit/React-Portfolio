import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return(
        <header class="title-menu">
        <div class="main-menu">  
            <nav class="navbar navbar-expand-lg navbar-light fixed-top">    
                <Link className="navbar-brand" to="/">
                    KIM CREDIT
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="nav-contents collapse navbar-collapse" id="navbarNav">
                    <div class="mr-auto"></div>
                        <ul class="navbar-nav">
                            <li class="nav-button nav-item active">
                                <Link
                                    to="/"
                                    className={
                                        window.location.pathname === "/" || window.location.pathname === "/home"
                                        ? "nav-link active"
                                        : "nav-link"
                                    }
                                >
                                    Home
                                </Link>
                            </li>
                            <li class="nav-button nav-item">
                                <Link 
                                    to='/contact'
                                    className={
                                        window.location.pathname === "/contact"
                                        ? "nav-link active"
                                        : "nav-link"
                                    }
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>   
                    </div>            
            </nav>
        </div>
    </header>
    );
}
  
  export default Navbar;
  
