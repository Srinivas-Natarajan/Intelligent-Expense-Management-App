import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: "Gas Bill", amount: 5000, createdAt: -21000 }));
store.dispatch(addExpense({ description: "Water Bill", amount: 7000, createdAt: -21000 }));
store.dispatch(setTextFilter("Water"));

const state = store.getState();
const getVisible = getVisibleExpenses(state.expenses, state.filters);
console.log(getVisible);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));


