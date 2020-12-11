import filtersReducers from '../../reducers/filters';
import moment from 'moment';


test("INIT", () => {
    const state = filtersReducers(undefined, { type: "@@INIT" })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
})


test("Sort by Amount", () => {
    const state = filtersReducers(undefined, { type: "SORT_BY_AMOUNT" })
    expect(state.sortBy).toBe('amount')
})


test("Sort by Date", () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    }
    const state = filtersReducers(currentState, { type: "SORT_BY_DATE" })
    expect(state.sortBy).toBe('date')
})


test("Set Text Filter", () => {
    const state = filtersReducers(undefined, { text: "Test Filter", type: 'SET_TEXT_FILTER' })
    expect(state.text).toBe("Test Filter")
})


test("Start Date", () => {
    const state = filtersReducers(undefined, { startDate: moment(0), type: 'SET_START_DATE' })
    expect(state.startDate).toEqual(moment(0))
})


test("End Date", () => {
    const state = filtersReducers(undefined, { endDate: moment(0), type: 'SET_END_DATE' })
    expect(state.endDate).toEqual(moment(0))
})