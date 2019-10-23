import React, { useState } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import AdminPage from "../../components/Admin";
import HomePage from "../../components/Home";
import JudgesPage from "../../components/Judges";
import PostersPage from "../../components/Posters";
import SignInPage from "../../components/SignIn";
import * as ROUTES from '../../constants/routes';
import Landing from '../../components/Landing';
import Navigation from '../../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const style = {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
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
                <Route exact path={ROUTES.LANDING} component={Landing}/>
                <Route path={ROUTES.HOME} component={HomePage}/>
                <Route path={ROUTES.JUDGES} component={JudgesPage} />
                <Route path={ROUTES.POSTERS} component={PostersPage} />
                <Route strict path={ROUTES.ADMIN} component={AdminPage} />
                <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            </Switch>    
        </div>
    </Router>
    );
}
