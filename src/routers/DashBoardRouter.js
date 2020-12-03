import {Redirect, Route, Switch} from 'react-router-dom';

import Error from '../views/dashboard/components/error/Error';
import Filter from '../views/dashboard/components/filter/Filter';
import Home from '../views/dashboard/components/home/Home';
import ActivityLog from '../views/dashboard/components/log/ActivityLog';
import MessageScreen from '../views/dashboard/components/messages/MessageScreen';
import NewUser from '../views/dashboard/components/newUser/NewUser';
import NotificationScreen from '../views/dashboard/components/notifications/NotificationScreen';
import Opinion from '../views/dashboard/components/opinion/Opinion';
import Profile from '../views/dashboard/components/profile/Profile';
import SearchScreen from '../views/dashboard/components/search/SearchScreen';
import Settings from '../views/dashboard/components/settings/Settings';

export const DashBoardRouter = () => {
  return (
    <Switch>
      <Route exact path="/dash/home" component={Home} />
      <Route exact path="/dash/seach" component={SearchScreen} />

      {/* Profile, update settings, etc */}
      <Route exact path="/dash/settings" component={Settings} />
      <Route exact path="/dash/profile" component={Profile} />
      <Route exact path="/dash/filter" component={Filter} />

      {/* Admin permissions */}
      <Route exact path="/dash/add" component={NewUser} />
      <Route exact path="/dash/log" component={ActivityLog} />

      {/* Addons */}
      <Route exact path="/dash/messages" component={MessageScreen} />
      <Route exact path="/dash/notifications" component={NotificationScreen} />

      {/* Log error of system log screen */}
      <Route exact path="/dash/error" component={Error} />

      {/* Opinion form */}
      <Route exact path="/dash/feelback" component={Opinion} />

      {/* Default redirect */}
      <Redirect to="/dash/home" />
    </Switch>
  );
}

export default DashBoardRouter;

