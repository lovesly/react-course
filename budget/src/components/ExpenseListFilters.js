import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStart, setEnd } from '../actions/filters';

class ExpenseListFilter extends React.Component {
    // why we use null here, and false in another place??
    // old question when will this.props be initialized?
    state = {
        calenderFocused: null,
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStart(startDate));
        this.props.dispatch(setEnd(endDate));
    };
    onFocusChange = (focused) => {
        this.setState(() => ({ calenderFocused: focused }));
    }
    render() {
        return (
            <div>
                <p>{ this.props.filters.text }</p>
                <input 
                    type='text' 
                    value={ this.props.filters.text } 
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select value={ this.props.filters.sortBy } 
                        onChange={(e) => {
                            console.log(e.target.value);
                            switch (e.target.value) {
                                case 'date':
                                    this.props.dispatch(sortByDate());
                                    break;
                                case 'amount':
                                    this.props.dispatch(sortByAmount());
                                    break;
                                default: 
                                    this.props.dispatch(sortByDate());
                            }
                        }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={ this.props.filters.startDate }
                    startDateId="expense-list-filter-start"
                    endDate={ this.props.filters.endDate }
                    endDateId="expense-list-filter-end"
                    onDatesChange={ this.onDatesChange }
                    focusedInput={ this.state.calenderFocused }
                    onFocusChange={ this.onFocusChange }
                    showClearDates={ true }
                    numberOfMonths={ 1 }
                    isOutsideRange={ () => false }
                />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilter);