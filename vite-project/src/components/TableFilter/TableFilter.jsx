/** @format */

import React from "react";

export const TableFilter = ({ items, isChecked }) => {
	return (
		<div>
			<h3>Table Filters</h3>
			<div>
				<div>
					<label htmlFor="sort-incomes-by-amount">
						<input
							type="checkbox"
							name="sort-incomes-by-amount"
							id="sort-incomes-by-amount"
							value={1}

                            onChange={(event)=>event.target.value}
						/>
						Sort By Amount
					</label>
				</div>
			</div>
		</div>
	);
};
