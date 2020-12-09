// Set Text Filter
export const setTextFilter = (textFilter = "") => ({
    type: "SET_FILTER",
    text: textFilter
});

//Sorting by Amount
export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

//Sorting by Date
export const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

export const setStartDate = (date) => ({
    type: "SET_START_DATE",
    startDate: date
});

export const setEndDate = (date) => ({
    type: "SET_END_DATE",
    endDate: date
});

