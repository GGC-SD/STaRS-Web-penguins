import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Button from 'react-bootstrap/Button';

const navStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 10,
    width: '100%',
    backgroundColor: '#00704a',
}

const linkStyle = {
    color: 'white',
    padding: '40px'
}

function Navigation(){
    
    return(
        <div className="nav-links" style = {navStyle}>
        <ul>
        <ul >
        <ui style = {linkStyle}>GGC STaRS</ui>
            <Link to="/home" style = {linkStyle}>Home Page</Link>
            <Link to="/Judges" style = {linkStyle}>Judges Page</Link>
            <Link to="/Posters" style = {linkStyle}>Posters Page</Link>          
            {/* <Link to="/SignIn" style = {linkStyle}>Sign In Page</Link> */}
        </ul>         
        </ul>  
       
        </div>
    )
} 
export default Navigation;