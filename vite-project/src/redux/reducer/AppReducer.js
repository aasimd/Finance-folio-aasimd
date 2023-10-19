/** @format */

const initialState = {
	incomes: [],
	sortIncomes: false,
	incomesCategory: "All",
	expenses: [],
	sortExpenses: false,
	expensesCategory: "All",
	savings: [],
	sortSavings: false,
	savingsCategory: "All",
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
		case "setSortIncomes":
			return { ...state, sortIncomes: payload };
		case "setIncomesCategory":
			return { ...state, incomesCategory: payload };
		case "getExpenses":
			return { ...state, expenses: payload };
		case "addExpense":
			return { ...state, expenses: [...state.expenses, payload] };
		case "setSortExpenses":
			return { ...state, sortExpenses: payload };
		case "setExpensesCategory":
			return { ...state, expensesCategory: payload };
		case "getSavings":
			return { ...state, savings: payload };
		case "addSaving":
			return { ...state, savings: [...state.savings, payload] };
		case "setSortSavings":
			return { ...state, sortSavings: payload };
		case "setSavingsCategory":
			return { ...state, savingsCategory: payload };
		default:
			return state;
	}
};
