

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

export default expenseReducer;