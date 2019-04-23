import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    state = {
        note: '',
        amount: '',
        description: '',
        createdAt: moment(),
        calendarFocused: false,
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }));
        }        
    };

    onDateChange = (createdAt) => {
        this.setState(() => ({createdAt}));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({calendarFocused: focused}))
    };

    render(){
        return (
            <div>
                <form>
                    <input 
                        autoFocus
                        type="text"
                        placeholder="Description"
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
                        numberOfMonths={1}
                        date={this.state.createdAt}
                        isOutsideRange={() => false}
                        onDateChange={this.onDateChange}
                        onFocusChange={this.onFocusChange}
                        focused={this.state.calendarFocused}
                    />

                    <textarea 
                        value={this.state.note}
                        placeholder="Add a note for your expense (opcional)" 
                        onChange={this.onNoteChange}
                    >
                    </textarea>

                    <button>Add Expense</button>
                </form>
            </div>
        );
    };
};