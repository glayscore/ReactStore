import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
}

const events = (props: Props) => {
    return (
        <div>Hello, events!</div>
    );
};

export default withRouter(events);
