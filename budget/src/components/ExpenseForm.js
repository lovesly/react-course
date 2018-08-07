import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    // since we are using transform-class-properties, so we don't have to use 
    // constructor to access this.props.
    // what is the benifits to transform number to string??
    state = {
        description: this.props.expense ? this.props.expense.description : '',
        note: this.props.expense ? this.props.expense.note : '',
        amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        calenderFocused: null,
        error: '',
    };
    onDescriptionChagne = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description })); 
    };
    onNoteChange = (e) => {
        // e.persist()
        const note = e.target.value;
        this.setState(() => ({ note })); 
    };
    onAmountChange = (e) => {
        // some input like 3.... or 12.12.... are not prevented at front end.
        // but some other operations are prevented. so fucking wierd.
        const amount = e.target.value;
        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        // should trim the value.
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.'}));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,                
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={ this.onSubmit }>
                { this.state.error && <p className="form__error">{ this.state.error }</p> }
                <input
                    type="text"
                    className="text-input"
                    placeholder="Description"
                    autoFocus
                    value={ this.state.description }
                    onChange={ this.onDescriptionChagne }
                />
                <input 
                    type="number"
                    className="text-input"
                    placeholder="Amount"
                    value={ this.state.amount }
                    onChange={ this.onAmountChange }
                />
                <SingleDatePicker 
                    date={ this.state.createdAt }
                    onDateChange={ this.onDateChange }
                    focused={ this.state.calenderFocused }
                    onFocusChange={ this.onFocusChange }
                    numberOfMonths={ 1 }
                    isOutsideRange={ () => false }
                />
                <textarea 
                    className="textarea"
                    placeholder="Add a note for your expense (optional)"
                    value={ this.state.note }
                    onChange={ this.onNoteChange }
                >
                </textarea>
                <button className="button btn-4 btn-m">Save Expense</button>
            </form>
        );
    }
}