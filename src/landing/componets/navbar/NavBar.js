import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


import NotFound from '../../../notFound404/NotFound';
import Landing from '../../Landing';
import Team from '../team/Team';
import Terms from '../terms/Terms';
import SignIn from '../../../forms/signIn/SignIn';

export const NavBar = () => {
    return (
        <Router>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about" >SignIn</Link>
                        </li>
                        <li>
                            <Link to="/" >SignUp</Link>
                        </li>
                        <li>
                            <Link to="/" >Team</Link>
                        </li>
                        <li>
                            <Link to="/" >Terms</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Switch>
                <Route exact path="/" component={ Landing } />
                <Route exact path="/signin" component={ SignIn } />
                <Route exact path="/signup" component={ Landing } />
                <Route exact path="/team" component={ Team } />
                <Route exact path="/terms" component={ Terms } />
                <Route  component={ NotFound } />
            </Switch>
        </Router>
    );
}

export default NavBar;
