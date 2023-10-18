/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchIncomes } from "../../redux/actions/actions";
import { TableComponent } from "../../components/TableComponent/TableComponent";
import { TableFilter } from "../../components/TableFilter/TableFilter";
export const Income = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.isLoading);
	const incomes = useSelector((state) => state.incomes);
	useEffect(() => {
		dispatch(fetchIncomes());
	}, [dispatch]);
	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div>
			<h1>Income</h1>
			<div>
				<TableFilter items={incomes} />
				<TableComponent items={incomes} />
			</div>
		</div>
	);
};
