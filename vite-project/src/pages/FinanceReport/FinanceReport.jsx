/** @format */

import React, { useEffect, useState } from "react";
import { IncomeVsExpenseReport } from "../../components/IncomeVsExpenseReport/IncomeVsExpenseReport";
import { ExpenseBreakdown } from "../../components/ExpenseBreakdown/ExpenseBreakdown";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchExpenses,
	fetchIncomes,
	fetchSavings
} from "../../redux/actions/actions";
import "./FinanceReport.css";

export const FinanceReport = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.isLoading);
	const [reportType, setReportType] = useState("Expense-Breakdown");
	const [selectedReport, setSelectedReport] = useState(reportType);
	useEffect(() => {
		dispatch(fetchIncomes());
		dispatch(fetchExpenses());
		dispatch(fetchSavings());
	}, [dispatch]);
	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className="finance-report-page">
			<h1>Finance Report</h1>
			<div>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						setSelectedReport(reportType);
					}}
				>
					<div>
						<label htmlFor="report-type">
							Select Report Type:{" "}
							<select
								name="report-type"
								id="report-type"
								onChange={(event) => setReportType(event.target.value)}
							>
								<option value="Expense-Breakdown">Expense Breakdown</option>
								<option value="Income-Vs-Expenses">Income Vs Expenses</option>
								{/* <option value="Income-Vs-Savings">Income Vs Savings</option>
								<option value="Expenses-Vs-Savings">Expenses Vs Savings</option> */
								/* <option value="Savings-Breakdown">Savings Breakdown</option> */}
							</select>
						</label>
					</div>
					<div>
						<input type="submit" value="Generate Report" />
					</div>
				</form>
			</div>
			<div>
				{selectedReport === "Income-Vs-Expenses" ? (
					<div className="incomeVsExpenseReport">
						<h2>Income Vs Expense Report</h2>
						<IncomeVsExpenseReport />
					</div>
				) : (
					<ExpenseBreakdown />
				)}
			</div>
		</div>
	);
};
