import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Add Expense 
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// Edit Expense
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id: id,
    updates: updates
});

// Remove Expense
const removeExpense = ({ id = 0 } = {}) => ({
    type: "REMOVE_EXPENSE",
    id: id
});


// Set Text Filter
const setTextFilter = (textFilter = "") => ({
    type: "SET_FILTER",
    text: textFilter
});

//Sorting by Amount
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

//Sorting by Date
const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

const setStartDate = (date) => ({
    type: "SET_START_DATE",
    startDate: date
});

const setEndDate = (date) => ({
    type: "SET_END_DATE",
    endDate: date
});



// Expense Reducer
const expenseReducerDefaultStates = []
const expenseReducer = (state = expenseReducerDefaultStates, action) => {
    switch (action.type) {
        case "ADD_EXPENSE": {
            return [...state, action.expense];
        }
        case "REMOVE_EXPENSE": {
            return state.filter((e) => {
                return !(e.id == action.id);
            });
        }
        case "EDIT_EXPENSE": {
            return (state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
                else {
                    return expense;
                }
            })
            );
            break;
        }
        default:
            return state;
    }
};

// Filter Reducer
const filterReducerDefaultStates = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultStates, action) => {
    switch (action.type) {
        case "SET_FILTER": {
            return { ...state, text: action.text };
        }
        case "SORT_BY_AMOUNT": {
            return {
                ...state,
                sortBy: "amount"
            };
        }
        case "SORT_BY_DATE": {
            return {
                ...state,
                sortBy: "date"
            };
        }
        case "SET_START_DATE": {
            return {
                ...state,
                startDate: action.startDate
            };
        }
        case "SET_END_DATE": {
            return {
                ...state,
                endDate: action.endDate
            };
        }
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof (startDate) != 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof (endDate) != 'number' || expense.createdAt <= endDate;
        const textMatch = typeof (text) != 'string' || (expense.description).toLowerCase().includes(text.toLowerCase());
        //const textMatch = true;

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date')
            return a.createdAt < b.createdAt ? 1 : -1;
        else if (sortBy === 'amount')
            return a.amount < b.amount ? 1 : -1;
    });
};



// Combined Reducer
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);



store.subscribe(() => {
    const state = store.getState();
    //console.log(state);
    const getVisible = getVisibleExpenses(state.expenses, state.filters);
    console.log(getVisible);
});


// Dispatch for Expense

const item1 = store.dispatch(addExpense({ description: "Rent", amount: 5000, createdAt: -21000 }));
const item2 = store.dispatch(addExpense({ description: "Coffee", amount: 2000, createdAt: -1000 }));


// Dispatch for Filter

//store.dispatch(setTextFilter("rent"));
store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(10));



/*
const demoState = {
    expenses: [{
        id: 'abcd',
        description: 'Sample desc',
        note: 'final notes',
        amount: 5400,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};
*/





