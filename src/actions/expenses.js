import uuid from 'uuid';

// Add Expense 
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
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
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id: id,
    updates: updates
});

// Remove Expense
export const removeExpense = ({ id = 0 } = {}) => ({
    type: "REMOVE_EXPENSE",
    id: id
});