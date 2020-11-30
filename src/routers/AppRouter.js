import React from 'react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DashBoardScreen from '../views/dashboard/DashBoardScreen';
import LandingScreen from '../views/landing/LandingScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                        <Route  path="/" component={LandingScreen} />
                        <Route path="/dash" component={DashBoardScreen} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;
