import {  Redirect, Route, Switch } from 'react-router-dom';
import Profile from '../views/dashboard/components/profile/Profile';

export const DashBoardRouter= () => {
    return (
            <Switch>
                <Route exact path="/dash/home" component={Profile} />
                <Route exact path="/dash/settings" component={Profile} />
                <Route exact path="/dash/profile" component={Profile} />
                <Route exact path="/dash/log" component={Profile} />
                <Route exact path="/dash/messages" component={Profile} />
                <Route exact path="/dash/add" component={Profile} />
                <Route exact path="/dash/error" component={Profile} />
                <Route exact path="/dash/feelback" component={Profile} />
                <Redirect to="/dash/home" />
            </Switch>
    );
}

export default DashBoardRouter;
