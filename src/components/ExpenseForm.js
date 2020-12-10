import React from 'react'
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.existingExpense ? props.existingExpense.id : undefined,
            description: props.existingExpense ? props.existingExpense.description : "",
            amount: props.existingExpense ? props.existingExpense.amount.toString() : 0,
            note: props.existingExpense ? props.existingExpense.note : "",
            createdAt: props.existingExpense ? moment(props.existingExpense.createdAt) : moment(),
            calanderFocused: false,
            errorMessageVisible: false
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt)
            this.setState(() => ({ createdAt }));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calanderFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ errorMessageVisible: true }));
        }
        else {
            if (this.state.errorMessageVisible === true)
                this.setState(() => ({ errorMessageVisible: false }));
            console.log("Submitted!!");
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.errorMessageVisible && <p>Please enter a Description and Amount</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calanderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your Expenses(Optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}

export default connect()(ExpenseForm);