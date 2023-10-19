/** @format */
import axios from "axios";
const GET_INCOMES = "getIncomes";
const GET_EXPENSES = "getExpenses";
const GET_SAVINGS = "getSavings";
const ADD_INCOME = "addIncome";
const ADD_EXPENSE = "addExpense";
const ADD_SAVING = "addSaving";
const SET_LOADING = "setLoading";
const CATCH_ERROR = "catchError";
const SET_INCOMES_CATEGORY = "setIncomesCategory";
const SET_SORT_INCOMES = "setSortIncomes";
const SET_EXPENSES_CATEGORY = "setExpensesCategory";
const SET_SORT_EXPENSES = "setSortExpenses";
const SET_SAVINGS_CATEGORY = "setSavingsCategory";
const SET_SORT_SAVINGS = "setSortSavings";

export const fetchIncomes = () => async (dispatch) => {
	dispatch({ type: SET_LOADING, payload: true });
	try {
		const response = await axios
			.get("https://financefolio.aasimd.repl.co/incomes")
			.catch((e) => {
				console.error(e);
				dispatch({ type: CATCH_ERROR, payload: e });
			});
		dispatch({ type: GET_INCOMES, payload: response.data.data });
		console.log("Incomes Fetched Successfully:", response.data.data);
	} catch (e) {
		console.error(e);
		dispatch({ type: CATCH_ERROR, payload: e });
	}
	dispatch({ type: SET_LOADING, payload: false });
};

export const addIncome = (income) => async (dispatch) => {
	dispatch({ type: SET_LOADING, payload: true });
	const requestBody = income;
	try {
		const response = await axios
			.post("https://financefolio.aasimd.repl.co/incomes", requestBody)
			.catch((e) => {
				console.error(e);
				dispatch({ type: CATCH_ERROR, payload: e });
			});
		dispatch({ type: ADD_INCOME, payload: response.data.data });
		console.log("Income Added Successfully");
	} catch (e) {
		console.error(e);
		dispatch({ type: CATCH_ERROR, payload: e });
	}
	dispatch({ type: SET_LOADING, payload: false });
};

export const fetchExpenses = () => async (dispatch) => {
	dispatch({ type: SET_LOADING, payload: true });
	try {
		const response = await axios
			.get("https://financefolio.aasimd.repl.co/expenses")
			.catch((e) => {
				console.error(e);
				dispatch({ type: CATCH_ERROR, payload: e });
			});
		dispatch({ type: GET_EXPENSES, payload: response.data.data });
		console.log("Expenses Fetched Successfully:", response.data.data);
	} catch (e) {
		console.error(e);
		dispatch({ type: CATCH_ERROR, payload: e });
	}
	dispatch({ type: SET_LOADING, payload: false });
};

export const addExpense = (expense) => async (dispatch) => {
	dispatch({ type: SET_LOADING, payload: true });
	const requestBody = expense;
	try {
		const response = await axios
			.post("https://financefolio.aasimd.repl.co/expenses", requestBody)
			.catch((e) => {
				console.error(e);
				dispatch({ type: CATCH_ERROR, payload: e });
			});
		dispatch({ type: ADD_EXPENSE, payload: response.data.data });
		console.log("Expense Added Successfully");
	} catch (e) {
		console.error(e);
		dispatch({ type: CATCH_ERROR, payload: e });
	}
	dispatch({ type: SET_LOADING, payload: false });
};

export const fetchSavings = () => async (dispatch) => {
	dispatch({ type: SET_LOADING, payload: true });
	try {
		const response = await axios
			.get("https://financefolio.aasimd.repl.co/savings")
			.catch((e) => {
				console.error(e);
				dispatch({ type: CATCH_ERROR, payload: e });
			});
		dispatch({ type: GET_SAVINGS, payload: response.data.data });
	} catch (e) {
		console.error(e);
		dispatch({ type: CATCH_ERROR, payload: e });
	}
	dispatch({ type: SET_LOADING, payload: false });
};

export const addSaving = (saving) => async (dispatch) => {
	dispatch({ type: SET_LOADING, payload: true });
	const requestBody = saving;
	try {
		const response = await axios
			.post("https://financefolio.aasimd.repl.co/savings", requestBody)
			.catch((e) => {
				console.error(e);
				dispatch({ type: CATCH_ERROR, payload: e });
			});
		dispatch({ type: ADD_SAVING, payload: response.data.data });
		console.log("Saving Added Successfully");
	} catch (e) {
		console.error(e);
		dispatch({ type: CATCH_ERROR, payload: e });
	}
	dispatch({ type: SET_LOADING, payload: false });
};

export const setIncomesCategory = (dispatch, e) =>
	dispatch({ type: SET_INCOMES_CATEGORY, payload: e.target.value });

export const setSortIncomes = (dispatch, e) =>
	dispatch({ type: SET_SORT_INCOMES, payload: e.target.checked });

export const setExpensesCategory = (dispatch, e) =>
	dispatch({ type: SET_EXPENSES_CATEGORY, payload: e.target.value });

export const setSortExpenses = (dispatch, e) =>
	dispatch({ type: SET_SORT_EXPENSES, payload: e.target.checked });

export const setSavingsCategory = (dispatch, e) =>
	dispatch({ type: SET_SAVINGS_CATEGORY, payload: e.target.value });

export const setSortSavings = (dispatch, e) =>
	dispatch({ type: SET_SORT_SAVINGS, payload: e.target.checked });
