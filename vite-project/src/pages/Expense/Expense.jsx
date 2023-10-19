/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
	addExpense,
	fetchExpenses,
	setExpensesCategory,
	setSortExpenses
} from "../../redux/actions/actions";
import { TableComponent } from "../../components/TableComponent/TableComponent";
import { TableFilter } from "../../components/TableFilter/TableFilter";
import { AddNewForm } from "../../components/AddNewForm/AddNewForm";
export const Expense = () => {
	const dispatch = useDispatch();
	const { isLoading, expenses, expensesCategory, sortExpenses } = useSelector(
		(state) => state
	);

	useEffect(() => {
		dispatch(fetchExpenses());
	}, [dispatch]);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className="expense-page">
			<h1>Expenses</h1>
			<div  className="table-form-layout">
				<div className="table-section">
					<TableFilter
						selectedCategory={expensesCategory}
						items={expenses}
						isChecked={sortExpenses}
						setCategory={setExpensesCategory}
						setSort={setSortExpenses}
					/>
					<TableComponent
						items={expenses}
						category={expensesCategory}
						isSorted={sortExpenses}
					/>
				</div>

				<div className="form-section">
					<AddNewForm type={"Expense"} submitAction={addExpense} />
				</div>
			</div>
		</div>
	);
};
