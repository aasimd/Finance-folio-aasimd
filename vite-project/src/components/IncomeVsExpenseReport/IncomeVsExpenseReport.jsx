/** @format */

import React from "react";
import { useSelector } from "react-redux";
import "./IncomeVsExpense.css";
export const IncomeVsExpenseReport = () => {
	const { incomes, expenses, savings } = useSelector((state) => state);
	const totalIncome = incomes.reduce((acc, curr) => acc + curr.amount, 0);
	const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);
	const totalSaving = savings.reduce((acc, curr) => acc + curr.amount, 0);
	return (
		<div>
			<ul>
				<li>
					Total Income: <b>{totalIncome}$</b>
				</li>
				<li>
					Total Expense: <b>{totalExpense}$</b>
				</li>
				<li>
					Total Saving: <b>{totalSaving}$</b>
				</li>
			</ul>
		</div>
	);
};
