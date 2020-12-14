import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (

    <Route {...rest} component={(props) => {
        if (!isAuthenticated) {
            return (
                <Component {...props} />
            )
        }
        else
            return <Redirect to='/dashboard' />
    }}>
    </Route>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute)