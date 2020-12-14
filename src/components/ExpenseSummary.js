import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import expenseTotal from '../selectors/expense-total';



const ExpenseSummary = (props) => (

    <div>
        <h3>Viewing {props.expenses.length} {props.word} with total {'\u20B9'} {props.totalExpense} </h3>
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