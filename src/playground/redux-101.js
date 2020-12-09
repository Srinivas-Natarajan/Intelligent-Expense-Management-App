import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy: incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy: decrementBy
})

const setCount = ({ count = 0 } = {}) => ({
    type: "SET",
    count: count
})

const resetCount = ({ count = 0 } = {}) => ({
    type: "RESET",
})

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT": {
            return { count: state.count + action.incrementBy };
            break;
        }
        case "DECREMENT": {
            return { count: state.count - action.decrementBy };
            break;
        }
        case "SET": {
            return { count: action.count };
            break;
        }
        case "RESET": {
            return { count: 0 };
            break;
        }
        default: {
            return state;
        }
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());

});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());


store.dispatch(decrementCount({ decrementBy: 4 }));

store.dispatch({
    type: 'SET',
    count: 101
});

store.dispatch({
    type: 'RESET'
});


