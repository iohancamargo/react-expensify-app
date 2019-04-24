import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    /* Necessário para realizar a ligação das edições com o state dessa classe */
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            calendarFocused: false,
            note: props.expense? props.expense.note : '',
            description: props.expense? props.expense.description :'',
            amount: props.expense? (props.expense.amount /100).toString() :'',
            createdAt: props.expense? moment(props.expense.createdAt) : moment(),
        };
    }

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
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.' }))
        } else {
            console.log('submit!!!!');
            this.setState(() => ({ error: '', description: '', amount: '', note: '', createdAt: moment() }))
            this.props.onSubmit({
                note: this.state.note,
                description: this.state.description,
                createdAt: this.state.createdAt.valueOf(),
                amount: parseFloat(this.state.amount, 10) * 100,
            });
        }

    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
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