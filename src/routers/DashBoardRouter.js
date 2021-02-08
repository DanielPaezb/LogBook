import { Redirect, Route, Switch } from 'react-router-dom';

import Error from '../pages/dashboard/components/error/Error';
import Filter from '../pages/dashboard/components/filter/Filter';
import Home from '../pages/dashboard/components/home/Home';
import ActivityLog from '../pages/dashboard/components/log/ActivityLog';
import MessageScreen from '../pages/dashboard/components/messages/MessageScreen';
import NewUser from '../pages/dashboard/components/newUser/NewUser';
import NotificationScreen from '../pages/dashboard/components/notifications/NotificationScreen';
import Opinion from '../pages/dashboard/components/opinion/Opinion';
import Profile from '../pages/dashboard/components/profile/Profile';
import SearchScreen from '../pages/dashboard/components/search/SearchScreen';
import Settings from '../pages/dashboard/components/settings/Settings';

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
