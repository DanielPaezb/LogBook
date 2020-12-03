import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Home from '../views/landing/components/home/Home';
import NavBar from '../views/landing/components/navbar/NavBar';
import Terms from '../views/landing/components/terms/Terms';
import Team from '../views/landing/components/team/Team';
import Information from '../views/landing/components/information/Information';

// Forms 
import SignUp from '../views/landing/components/forms/signUp/SignUp';
import SignIn from '../views/landing/components/forms/signIn/SignIn';
import RecoverPassword from '../views/landing/components/forms/recoverPassword/RecoverPassword';


export const LandingRouter = () => {
  return (
    // Router for landing page
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={Information} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/terms" component={Terms} />

        {/* Forms for login and register */}
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/login/recover" component={RecoverPassword} />
        <Route exact path="/register" component={SignUp} />

        {/* Default re-direct */}
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default LandingRouter;

