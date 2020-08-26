import React from 'react';
import { 
    withRouter, 
    Switch, 
    Route, 
    RouteComponentProps,
    Redirect,
  } from 'react-router-dom';

interface Props extends RouteComponentProps {
}

const Events = React.lazy(() => import('./events'));
const Tours = React.lazy(() => import('./tours'));
const Informatively = React.lazy(() => import('./informatively'));
const Guides = React.lazy(() => import('./guides'));
const Contacts = React.lazy(() => import('./contacts'));

const Main = (props: Props) => {    
    return (
        <Switch>
            <Redirect exact from={`${props.match.url}/`} to={`${props.match.url}/events`} />
            <Route path={`${props.match.url}/events`} component={(props: Props) => <Events {...props} />} />
            <Route path={`${props.match.url}/tours`} component={(props: Props) => <Tours {...props} />} />
            <Route path={`${props.match.url}/informatively`} component={(props: Props) => <Informatively {...props} />} />
            <Route path={`${props.match.url}/guides`} component={(props: Props) => <Guides {...props} />} />
            <Route path={`${props.match.url}/contacts`} component={(props: Props) => <Contacts {...props} />} />
        </Switch>
    );
};

export default withRouter(Main);
