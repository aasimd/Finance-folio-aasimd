/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { getAmountPerCategories } from "../../functions/utils";
import "./ExpenseBreakdown.css";

export const ExpenseBreakdown = () => {
	const expenses = useSelector((state) => state.expenses);
	const expensesCategories = getAmountPerCategories(expenses);
	const expensesTotal = expenses.reduce((acc, curr) => acc + curr.amount, 0);
	return (
		<div className="expense-table-section">
			<h2>Expense Breakdown Report</h2>
			<div className="expense-table">
				<table>
					<thead>
						<tr>
							<th>Category</th>
							<th>Amount (in $)</th>
							<th>%</th>
						</tr>
					</thead>
					<tbody>
						{expensesCategories.map((e) => {
							const percent = (e.totalAmount / expensesTotal) * 100;
							return (
								<tr>
									<td>{e.category}</td>
									<td>{e.totalAmount}</td>
									<td>{percent.toFixed(1)}</td>
								</tr>
							);
						})}
						<tr>
							<th>Total</th>
							<th>{expensesTotal}</th>
							<th>100</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
