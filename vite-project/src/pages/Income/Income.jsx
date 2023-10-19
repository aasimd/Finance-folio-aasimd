/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addIncome, fetchIncomes } from "../../redux/actions/actions";
import { TableComponent } from "../../components/TableComponent/TableComponent";
import { TableFilter } from "../../components/TableFilter/TableFilter";
import {
	setSortIncomes,
	setIncomesCategory
} from "../../redux/actions/actions";
import { AddNewForm } from "../../components/AddNewForm/AddNewForm";

import "../pageLayout.css";

export const Income = () => {
	const dispatch = useDispatch();
	const { isLoading, incomes, sortIncomes, incomesCategory } = useSelector(
		(state) => state
	);

	useEffect(() => {
		dispatch(fetchIncomes());
	}, [dispatch]);
	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className="income-page">
			<h1>Incomes</h1>
			<div className="table-form-layout">
				<div className="table-section">
					<TableFilter
						selectedCategory={incomesCategory}
						items={incomes}
						isChecked={sortIncomes}
						setCategory={setIncomesCategory}
						setSort={setSortIncomes}
					/>
					<TableComponent
						items={incomes}
						category={incomesCategory}
						isSorted={sortIncomes}
					/>
				</div>
				<div className="form-section">
					<AddNewForm type={"Income"} submitAction={addIncome} />
				</div>
			</div>
		</div>
	);
};
