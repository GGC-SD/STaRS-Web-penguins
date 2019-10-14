import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { BrowserRouter } from 'react-router-dom';

function Navigation() {
    
    return <BrowserRouter>
         <div>
            <ul>
            <li>
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </li>
                <li>
                    <Link to={ROUTES.HOME}> Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.SIGN_IN}>Sign in</Link>
                </li>
                <li>
                    <Link to={ROUTES.JUDGES}>Judges</Link>
                </li>
                <li>
                    <Link to={ROUTES.POSTERS}>Posters</Link>
                </li>
                <li>
                    <Link to={ROUTES.ADMIN}>Admin</Link>
                </li>
            </ul>
        </div>
    </BrowserRouter> 
} export {Navigation} from '../Navigation';