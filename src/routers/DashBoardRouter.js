import {  Route, Switch } from 'react-router-dom';
import Profile from '../components/dashboard/components/profile/Profile';



export const DashBoardRouter= () => {
    return (
        <Switch>
            <Route exact path="/dash/home" component={Profile} />
        </Switch>
    );
}

export default DashBoardRouter;
