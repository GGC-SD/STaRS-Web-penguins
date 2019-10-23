import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Button from 'react-bootstrap/Button';

const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#28A745'
}

const linkStyle = {
    color: 'white',
    padding: '40px'
}

function Navigation(){
    
    return(
        <div className="nav-links">
        <ul>
        <ul style = {ulStyle}>
            <Link to="/home" style = {linkStyle}>Home Page</Link>
            <Link to="/Judges" style = {linkStyle}>Judges Page</Link>
            <Link to="/Posters" style = {linkStyle}>Posters Page</Link>          
            <Link to="/SignIn" style = {linkStyle}>Sign In Page</Link>
        </ul>         
        </ul>  
       
        </div>
    )
} 
export default Navigation;