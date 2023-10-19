/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { getItemsCategories } from "../../functions/utils";
import "./TableFilter.css";
export const TableFilter = ({
	items,
	isChecked,
	setCategory,
	setSort,
	selectedCategory
}) => {
	const dispatch = useDispatch();
	const itemsCategories = getItemsCategories(items);
	return (
		<div className="filter-section">
			<h3>Filters</h3>
			<div className="filters">
				<div>
					<label htmlFor="sort-by-amount">
						<input
							type="checkbox"
							name="sort-by-amount"
							id="sort-by-amount"
							checked={isChecked === true ? true : false}
							onChange={(event) => setSort(dispatch, event)}
						/>
						Sort By Amount
					</label>
				</div>
				<div>
					<label htmlFor="select-category">
						Select Category:{" "}
						<select
							name="select-category"
							className="select-category"
							onChange={(event) => setCategory(dispatch, event)}
						>
							<option
								selected={selectedCategory === "All" ? true : false}
								value="All"
							>
								All
							</option>
							{itemsCategories.map((category) => (
								<option
									selected={selectedCategory === category ? true : false}
									key={category}
									value={category}
								>
									{category}
								</option>
							))}
						</select>
					</label>
				</div>
			</div>
		</div>
	);
};
