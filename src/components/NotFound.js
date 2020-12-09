import React from 'react';
import { NavLink } from 'react-router-dom';


const NotFoundPage = () => (
    <div>
        <p>Error 404!!!</p>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink><br />
    </div>
);

export default NotFoundPage;