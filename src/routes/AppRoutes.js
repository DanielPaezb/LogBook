import React from 'react';
import NavBar from 'views/landing/componets/navbar/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from 'views/landing/componets/home/Home';
import Information from 'views/landing/componets/information/Information';
import Team from 'views/landing/componets/team/Team';
import SignIn from 'views/landing/componets/forms/signIn/SignIn';
import SignUp from 'views/landing/componets/forms/signUp/SignUp';
import RecoverPassword from 'views/landing/componets/forms/recoverPassword/RecoverPassword';
import Terms from 'views/landing/componets/terms/Terms';
import NotFound from 'views/landing/componets/notFound404/NotFound';

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
