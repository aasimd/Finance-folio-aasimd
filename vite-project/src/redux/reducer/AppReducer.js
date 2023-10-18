/** @format */

const initialState = {
	incomes: [],
	expenses: [],
	savings: [],
	isLoading: true,
	error: null
};

export const AppReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case "setLoading":
			return { ...state, isLoading: payload };
		case "catchError":
			return { ...state, error: payload };
		case "getIncomes":
			return { ...state, incomes: payload };
		case "addIncome":
			return { ...state, incomes: [...state.incomes, payload] };
		case "getExpenses":
			return { ...state, expenses: payload };
		case "addExpense":
			return { ...state, expenses: [...state.expenses, payload] };
		case "getSavings":
			return { ...state, savings: payload };
		case "addSaving":
			return { ...state, savings: [...state.savings, payload] };
		default:
			return state;
	}
};
