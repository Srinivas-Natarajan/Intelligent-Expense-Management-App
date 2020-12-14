import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

import expenseTotal from '../selectors/expense-total';



const ExpenseSummary = (props) => (

    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> {props.word} with total <span>{'\u20B9'} {props.totalExpense}</span> </h1>
            <div className="page-header__actions">
                <Link to="/create" className="button">Add Expense</Link>
            </div>
        </div>

    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        totalExpense: numeral(expenseTotal(state.expenses)).format("0,0.00"),
        word: state.expenses.length <= 1 ? "expense " : "expenses "
    };
};

export default connect(mapStateToProps)(ExpenseSummary);