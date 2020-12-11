import { removeExpense } from '../../actions/expenses';
import expenseReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test("Default values", () => {
    const state = expenseReducers(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
})

test("Add Expense", () => {

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


test("Edit Expense", () => {

})