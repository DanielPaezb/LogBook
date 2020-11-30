import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'

import SignUp from '../components/landing/components/forms/signUp/SignUp';
import RecoverPassword from '../components/landing/components/forms/recoverPassword/RecoverPassword';
import SignIn from '../components/landing/components/forms/signIn/SignIn';
import Terms from '../components/landing/components/terms/Terms';
import Team from '../components/landing/components/team/Team';
import Information from '../components/landing/components/information/Information';
import NavBar from '../components/landing/components/navbar/NavBar';
import Home from '../components/landing/components/home/Home';


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
