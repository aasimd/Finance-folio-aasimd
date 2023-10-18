/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchExpenses } from "../../redux/actions/actions";
import { TableComponent } from "../../components/TableComponent/TableComponent";
export const Expense = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.isLoading);
	const expenses = useSelector((state) => state.expenses);
	useEffect(() => {
		dispatch(fetchExpenses());
	}, [dispatch]);
  
	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div>
			<h1>Expense Tab</h1>
			<div>
				<TableComponent items={expenses} />
			</div>
		</div>
	);
};
