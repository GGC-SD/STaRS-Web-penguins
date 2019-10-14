import React from 'react';
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom';
import AdminPage from "../../components/Admin";
import HomePage from "../../components/Home";
import JudgesPage from "../../components/Judges";
import PostersPage from "../../components/Posters";
import SignInPage from "../../components/SignIn";
import * as ROUTES from '../../constants/routes';
import Landing from '../Landing';


const style = {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
  }
/**A function that creates Link buttons for each component */
function Navigation(){
    return(
        <ul>
            <li> <Link to="/">Landing</Link></li>
            <li> <Link to="/home">HomePage</Link></li>
            <li> <Link to="/Judges">JudgesPage</Link></li>
            <li> <Link to="/Posters">PostersPage</Link></li>           
            <li> <Link to="/SignIn">SignInPage</Link></li>
        </ul> 
    )
}

/**We are exporting the main function of app component. It builds the routes to each component
 * so you can navigate to the correct page.
 */
export default function App (){
    return (
    <Router>
        <div style={style}>
            <Navigation />
            <Switch>
                {/* <Route path={ROUTES.LANDING}>
                    <Landing />
                </Route> */}
                <Route path={ROUTES.HOME}>
                    <HomePage />
                </Route>
                <Route path={ROUTES.JUDGES}>
                    <JudgesPage />
                </Route>
                <Route path={ROUTES.POSTERS}>
                    <PostersPage />
                </Route>
                <Route strict path={ROUTES.ADMIN}>
                    <AdminPage />
                </Route>
                <Route path={ROUTES.SIGN_IN}>
                    <SignInPage />
                </Route>
            </Switch>    
        </div>
    </Router>
    );
}
