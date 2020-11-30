import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../landing/home/Home';

export const DasBoardRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default DasBoardRoutes;
