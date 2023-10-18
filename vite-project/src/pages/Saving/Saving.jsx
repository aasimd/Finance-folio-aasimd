/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSavings } from "../../redux/actions/actions";
import { TableComponent } from "../../components/TableComponent/TableComponent";
export const Saving = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.isLoading);
	const savings = useSelector((state) => state.savings);

	useEffect(() => {
		dispatch(fetchSavings());
	}, [dispatch]);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div>
			<h1>Savings Tab</h1>
			<div>
				<TableComponent items={savings} />
			</div>
		</div>
	);
};
