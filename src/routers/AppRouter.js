import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


const ExpenseDashboardPage = () => (
    <div>
        <p>This is a Dashboard Component</p>
    </div>
);

const AddExpensePage = () => (
    <div>
        <p>This is a Expense Component</p>
    </div>
);

const EditExpensePage = () => (
    <div>
        <p>This is a Editing Component</p>
    </div>
);

const HelpPage = () => (
    <div>
        <p>This is a Help Component</p>
    </div>
);

const NotFoundPage = () => (
    <div>
        <p>Error 404!!!</p>
        <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <div>
        <header>
            <h1>
                Header here
            </h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink><br />
            <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink><br />
            <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink><br />
            <NavLink to="/help" activeClassName="is-active">Help</NavLink><br />
        </header>
    </div>
);

const AppRouter = () => (
    <BrowserRouter >
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;