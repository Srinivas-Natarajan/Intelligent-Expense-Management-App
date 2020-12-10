import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <NavLink to={`/edit/${id}`} activeClassName="is-active" exact={true}>{description}</NavLink>
    <p>Amount: {amount}</p>
    <p>Created At:{moment(createdAt).format("DD MMM, YYYY")}</p>
  </div>
);

export default ExpenseListItem;
