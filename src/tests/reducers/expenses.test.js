import { removeExpense } from '../../actions/expenses';
import expenseReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test("Default values", () => {
    const state = expenseReducers(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
})


test("Add Expense", () => {
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: "4",
            description: 'Lunch',
            note: '',
            amount: 5500,
            createdAt: 789098
        }
    }
    const state = expenseReducers(expenses, action)
    expect(state).toEqual(
        expenses.concat({
            id: expect.any(String),
            description: 'Lunch',
            note: '',
            amount: 5500,
            createdAt: 789098
        })
    )
})


test("Remove Expense valid ID", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expenseReducers(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})


test("Remove Expense Invalid ID", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    }
    const state = expenseReducers(expenses, action)
    expect(state).toEqual(expenses)
})


test("Edit Valid Expense", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "3",
        updates: {
            description: 'Butter',
            note: '',
            amount: 89500,
            createdAt: 789098
        }
    }
    const state = expenseReducers(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1]].concat({ id: "3", ...action.updates }))
})


test("Edit Invalid Expense", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "4",
        updates: {
            description: 'Butter',
            note: '',
            amount: 89500,
            createdAt: 789098
        }
    }
    const state = expenseReducers(expenses, action)
    expect(state).toEqual(expenses)
})