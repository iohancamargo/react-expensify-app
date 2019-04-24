import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { sortByAmount, sortByDate, setTextFilter, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate,endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }} />

                <select value={this.props.filters.sortBy}
                    onChange={(e) => {
                        switch (e.target.value) {
                            case 'date':
                                this.props.dispatch(sortByDate());
                                break;

                            case 'amount':
                                this.props.dispatch(sortByAmount());

                                break;
                        }
                    }
                    }>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={() => false}
                    onDatesChange={this.onDatesChange}
                    onFocusChange={this.onFocusChange}
                    endDate={this.props.filters.endDate}
                    startDate={this.props.filters.startDate}
                    focusedInput={this.state.calendarFocused}
                />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);
