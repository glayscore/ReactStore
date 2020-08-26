import React from 'react';
import { 
  withRouter, 
  Switch, 
  Route, 
  RouteComponentProps,
  Redirect,
} from 'react-router-dom';

const Services = React.lazy(() => import('./services'));
const Main = React.lazy(() => import('./home'));

interface Props extends RouteComponentProps {
}

const Views = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={(props: Props) => <Main {...props} />} />
      <Route path="/services" component={(props: Props) => <Services {...props} />} />
      <Route exact path="/error" component={() => <div>Page not found</div>} />
      <Redirect to="/error"/>
    </Switch>
  )
};

export default withRouter(Views);
