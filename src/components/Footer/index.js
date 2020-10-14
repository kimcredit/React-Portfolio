import React from 'react';
import './style.css';
import github from './github.png';
import linkedin from './linkedin.png';
import instagram from './instagram.png';

function Footer() {
    return (
        <footer>
            <nav class="navbar fixed-bottom navbar-light bg-light">
                <div class="logo-links">
                    <a class="navbar-brand" href="https://github.com/kimcredit">
                        <img src= {github} alt="github-logo" width="30px" height="30px"></img>
                    </a>
                    <a class="navbar-brand" href="https://www.linkedin.com/in/kimcredit/">
                        <img src= {linkedin} alt="linkedin-logo" width="30px" height="30px"></img>
                    </a>
                    <a class="navbar-brand" href="https://www.instagram.com/kimcredit4/">
                        <img src= {instagram} alt="instagram-logo" width="30px" height="30px"></img>
                    </a>
                </div>
            </nav>         
        </footer>
    );
}

export default Footer;