import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveModal from './RemoveModal';

class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    modalVisible: false
  }

  makeModalInvisible = () => {
    this.setState({ modalVisible: false })
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1>Edit Expenses</h1>
          </div>
        </div>

        <div className="content-container">
          <ExpenseForm
            existingExpense={this.props.expense}
            onSubmit={(expense) => {
              this.props.dispatch(startEditExpense(this.props.expense.id, expense));
              this.props.history.push('/');
            }}
          />

          {/*<button onClick={() => {
            this.props.dispatch(startRemoveExpense({ id: this.props.expense.id }));
            this.props.history.push('/');
          }}
            className="button button--secondary"
        >Remove Expense</button>*/}
          <button onClick={() => { this.setState({ modalVisible: true }) }}
            className="button button--secondary"
          >Remove Expense</button>
          <RemoveModal modalVisible={this.state.modalVisible} expense={this.props.expense} makeModalInvisible={this.makeModalInvisible} />

        </div>

      </div>
    );
  }
}


const mapStateToProps = (state, props) => {

  return {
    expense: state.expenses.find((expense) => (expense.id === props.match.params.id))
  };
}

export default connect(mapStateToProps)(EditExpensePage);
