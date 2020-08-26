import React from 'react';
import { 
    withRouter,
    Switch,
    Route,
    RouteComponentProps,
    Redirect,
} from 'react-router-dom';

const Rotator = React.lazy(() => import('./rotator'));
const Sandbox = React.lazy(() => import('./sandbox'));

interface Props extends RouteComponentProps{
}

const services = (props: Props) => {
    return (
        <Switch>
            <Route exact path={`${props.match.url}/`} component={() => <div>Hello services</div>} />
            <Route path={`${props.match.url}/rotator`} component={(props: Props) => <Rotator {...props} />} />
            <Route path={`${props.match.url}/sandbox`} component={(props: Props) => <Sandbox {...props} />} />
            <Redirect to="/error" />
        </Switch>
    );
};

export default withRouter(services);
