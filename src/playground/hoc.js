// higher ordem component HOC - a component that randers another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract states

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponnent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share</p> }
            <WrappedComponnent {...props}/>
        </div>
    );
};
const requireAuthentication = (WrappedComponnent) => {
    return (props) => (
        // { props.isAuthentication && <p>This is a save area</p> }
        // { !props.isAuthentication && <p>This is't a save area</p> }
        // <WrappedComponnent {...props}/>
        <div>
            {props.isAuthentication ? (
                <WrappedComponnent {...props} />
            ): (
                <p>Please make login</p>
            )}
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="this is my detail" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthentication={true} info="this is my detail" />,document.getElementById('app'));

