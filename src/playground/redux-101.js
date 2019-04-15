import { createStore } from 'redux';

// Action generates.

const incrementCount = ({ incrementBy = 1 } = {}) => ({ // usando o destructiom JS6
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({valueOfSet }) => ({
    type: 'SET',
    valueOfSet
});

const resetCount = () => ({
    type: 'RESET'
});

/**
 * Reducers
 * 1. Reducers are pure functions  (Não usa nada além do escopo da função e também não alteram nada fora do escopo da função)
 * 2. Never change state or actions
 */
const countReducer = (state = {count: 0}, action ) => {

    switch (action.type) {
        // case 'INCREMENT': OLD WAY
        //     const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        //     return {
        //         count: state.count + incrementBy
        //     }

        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }

        case 'DECREMENT':
        // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        //     return {
        //         count: state.count - decrementBy
        //     }
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }

        case 'SET':
            // return {
            //     count: action.count
            // }
            return {
                count: action.valueOfSet
            }
    
        default:
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});



// INCREMENT the count - old way
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5 
// });
store.dispatch(incrementCount()); // Evita erros de digitação que dificultam o debug
store.dispatch(incrementCount({ incrementBy: 5 })); 
 
// RESET the count
// store.dispatch({
//     type: 'RESET'
// });
store.dispatch(resetCount());

// DECREMENT the count
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 1000}));

// SET
// store.dispatch({
//     type: 'SET',
//     count: 101
// });
store.dispatch(setCount({ valueOfSet: 101 }));
    


// store.getState(console.log(store.getState()));