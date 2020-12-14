import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calanderFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (calanderFocused) => {
    this.setState(() => ({ calanderFocused }));
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">

          <div className="input-group__item">
            <input className="text-input" type="text" value={this.props.filters.text} onChange={(e) => {
              this.props.dispatch(setTextFilter(e.target.value));
            }} placeholder="Search Input" />
          </div>

          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={(e) => {
                e.target.value === "date" ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount())
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>

          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calanderFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>

        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
