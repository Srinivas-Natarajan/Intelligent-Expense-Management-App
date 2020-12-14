import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link to={`/edit/${id}`} className="list-item">
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__subtitle"><p>{moment(createdAt).format("DD MMM, YYYY")}</p></span>
    </div>
    <h3 className="list-item__data">{'\u20B9 ' + numeral(amount).format("0,0.00")}</h3>

  </Link>
);

export default ExpenseListItem;
