import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStart, setEnd } from '../actions/filters';

export class ExpenseListFilter extends React.Component {
    // why we use null here, and false in another place??
    // old question when will this.props be initialized?
    state = {
        calenderFocused: null,
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStart(startDate);
        this.props.setEnd(endDate);
    };
    onFocusChange = (focused) => {
        this.setState(() => ({ calenderFocused: focused }));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
        // console.log(e.target.value);
        switch (e.target.value) {
            case 'date':
                this.props.sortByDate();
                break;
            case 'amount':
                this.props.sortByAmount();
                break;
            default: 
                this.props.sortByDate();
        }
    };
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            className="text-input"
                            placeholder="Search epxenses"
                            type="text" 
                            value={ this.props.filters.text } 
                            onChange={ this.onTextChange }
                        />
                    </div>
                    <div className="input-group__item">
                        <select 
                            className="text-input"                            
                            value={ this.props.filters.sortBy } 
                            onChange={ this.onSortChange }
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
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
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch) => ({ 
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStart: (startDate) => dispatch(setStart(startDate)),
    setEnd: (endDate) => dispatch(setEnd(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);