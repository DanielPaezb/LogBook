import React from 'react';
import NavBar from '../landing/componets/navbar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../landing/home/Home';
import SignIn from '../landing/componets/forms/signIn/SignIn';
import SignUp from '../landing/componets/forms/signUp/SignUp';
import Team from '../landing/componets/team/Team';
import Terms from '../landing/componets/terms/Terms';
import NotFound from '../landing/componets/notFound404/NotFound';

export const AppRoutes = () => {
    return (
        <Router>
            <>
                <NavBar />

                <Switch>
                    {/* Landing */}
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/signin" component={ SignIn } />
                    <Route exact path="/signup" component={ SignUp } />
                    <Route exact path="/team" component={ Team } />
                    <Route exact path="/terms" component={ Terms } />
                    
                    {/* DashBoard */}
                    
                </Switch>
            </>
        </Router>
    );
}

export default AppRoutes;