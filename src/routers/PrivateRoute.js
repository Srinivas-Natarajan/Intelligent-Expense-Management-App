import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (

    <Route {...rest} component={(props) => {
        if (isAuthenticated) {
            return (
                <div>
                    <Header />
                    <Component {...props} />
                </div>
            )
        }
        else
            return <Redirect to='/' />
    }}>
    </Route>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute)