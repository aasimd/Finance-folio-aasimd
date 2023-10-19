/** @format */

import React, { useEffect } from "react";
import { IncomeVsExpenseReport } from "../../components/IncomeVsExpenseReport/IncomeVsExpenseReport";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchExpenses,
	fetchIncomes,
	fetchSavings
} from "../../redux/actions/actions";

export const Home = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.isLoading);

	useEffect(() => {
		dispatch(fetchIncomes());
		dispatch(fetchExpenses());
		dispatch(fetchSavings());
	}, [dispatch]);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div>
			<h1>FinanceFolio</h1>
			<div className="incomeVsExpenseReport">
				<IncomeVsExpenseReport />
			</div>
		</div>
	);
};
