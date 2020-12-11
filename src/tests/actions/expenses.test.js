import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test("Remove Expense Object", () => {
    const action = removeExpense({ id: "abc123" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "abc123"
    })
})



test("Edit Expense Object", () => {
    const updates = { note: "New note added" };
    const action = editExpense("abc123", { note: "New note added" });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: "abc123",
        updates: {
            note: "New note added"
        }
    })
})



test("Add Expense Object with provided", () => {

    const expenseData = {
        description: "rent",
        amount: 500,
        createdAt: 1000,
        note: "Last month rent"
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test("Add Expense Object with defaults", () => {

    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})