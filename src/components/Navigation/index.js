import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


function Navigation(){
    
    return(
        <div className="nav-links">
        <ul>
            <Link to={ROUTES.HOME}>
                <li>home</li>
            </Link>
            <Link to={ROUTES.SIGN_IN}>
                <li>Sign In</li>
            </Link> 
            <Link to={ROUTES.POSTERS}>
                <li>posters</li>
            </Link>
            <Link to={ROUTES.JUDGES}>
                <li>judges</li>
            </Link>         
            
        </ul> 
        </div>
    )
} 
export default Navigation;