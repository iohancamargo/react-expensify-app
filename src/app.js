/* Libs */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
/* React Configs */
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';

/* Styles */
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();


store.dispatch(addExpense({ description: 'Water bill', amount: 299, createdAt: -21000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 300, createdAt: -100 }));

store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// console.log(store.getState());
ReactDOM.render(jsx, document.getElementById('app'));