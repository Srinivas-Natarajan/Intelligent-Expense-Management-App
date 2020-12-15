import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { history } from '../routers/AppRouter';



import { startRemoveExpense } from '../actions/expenses';


const RemoveModal = (props) => (
    <Modal
        isOpen={props.modalVisible}
        contentLabel="Remove Expense"
        closeTimeoutMS={200}
        className="modal"
        onRequestClose={props.makeModalInvisible}
    >
        <h3 className="modal-title">Are you sure you want to remove the expense?</h3>
        <button
            className="button button--modal"
            onClick={() => {
                props.dispatch(startRemoveExpense({ id: props.expense.id }))
                history.push("/dashboard");
                //return props.makeModalInvisible;
            }}
        >Delete!
        </button>
        <button className="button button--modal" onClick={props.makeModalInvisible}>Cancel</button>

    </Modal>
);

export default connect()(RemoveModal);