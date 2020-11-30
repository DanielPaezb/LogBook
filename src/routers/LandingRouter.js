import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'

import SignUp from '../views/landing/components/forms/signUp/SignUp';
import RecoverPassword from '../views/landing/components/forms/recoverPassword/RecoverPassword';
import SignIn from '../views/landing/components/forms/signIn/SignIn';
import Terms from '../views/landing/components/terms/Terms';
import Team from '../views/landing/components/team/Team';
import Information from '../views/landing/components/information/Information';
import NavBar from '../views/landing/components/navbar/NavBar';
import Home from '../views/landing/components/home/Home';


export const LandingRouter = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={Information} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/login/recover" component={RecoverPassword} />
        <Route exact path="/register" component={SignUp} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default LandingRouter;
