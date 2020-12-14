import expenseTotal from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';


const total = expenses.reduce((a, b) => {
    return { amount: a.amount + b.amount };
});


test("Totaling empty expenses", () => {
    const state = expenseTotal([]);
    expect(state).toBe(0)
})


test("Totaling with one element", () => {
    const state = expenseTotal([expenses[0]]);
    expect(state).toBe(195)
})


test("Totaling with multiple elements", () => {
    const state = expenseTotal(expenses);
    expect(state).toEqual(total.amount)
})


