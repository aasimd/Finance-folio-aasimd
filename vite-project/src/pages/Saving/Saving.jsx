/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
	addSaving,
	fetchSavings,
	setSavingsCategory,
	setSortSavings
} from "../../redux/actions/actions";
import { TableComponent } from "../../components/TableComponent/TableComponent";
import { TableFilter } from "../../components/TableFilter/TableFilter";
import { AddNewForm } from "../../components/AddNewForm/AddNewForm";
export const Saving = () => {
	const dispatch = useDispatch();
	const { isLoading, savings, savingsCategory, sortSavings } = useSelector(
		(state) => state
	);

	useEffect(() => {
		dispatch(fetchSavings());
	}, [dispatch]);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className="saving-page">
			<h1>Savings</h1>
			<div className="table-form-layout">
				<div className="table-section">
					<TableFilter
						selectedCategory={savingsCategory}
						items={savings}
						isChecked={sortSavings}
						setCategory={setSavingsCategory}
						setSort={setSortSavings}
					/>
					<TableComponent
						items={savings}
						category={savingsCategory}
						isSorted={sortSavings}
					/>
				</div>
				<div className="form-section">
					<AddNewForm type="Saving" submitAction={addSaving} />
				</div>
			</div>
		</div>
	);
};
