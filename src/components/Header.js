import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
    <div>
        <header>
            <h1>
                Expensify App
            </h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink><br />
            <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink><br />
            <NavLink to="/help" activeClassName="is-active">Help</NavLink><br />
        </header>
    </div>
);

export default Header;