import React from 'react';
import NavBar from '../landing/componets/navbar/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from '../landing/home/Home';
import SignIn from '../landing/componets/forms/signIn/SignIn';
import SignUp from '../landing/componets/forms/signUp/SignUp';
import Team from '../landing/componets/team/Team';
import Terms from '../landing/componets/terms/Terms';
import NotFound from '../landing/componets/notFound404/NotFound';
import Information from '../landing/componets/information/Information';
import RecoverPassword from '../landing/componets/forms/recoverPassword/RecoverPassword';

export const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Information} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/login/recover" component={RecoverPassword} />
        <Route exact path="/register" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
