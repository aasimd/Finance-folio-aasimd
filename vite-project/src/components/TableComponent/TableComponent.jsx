/** @format */

import React from "react";
import { filterItems } from "../../functions/utils";
import "./TableComponent.css";

export const TableComponent = ({ items, isSorted, category }) => {
	const filteredItems = filterItems(items, isSorted, category);
	const total = filteredItems.reduce((acc, curr) => acc + curr.amount, 0);
	return (
		<div className="table-component">
			<table>
				<thead>
					<tr>
						{["Number", "Date", "Category", "Description", "Amount (in $)"].map(
							(e, index) => (
								<th key={index}>
									<b>{e}</b>
								</th>
							)
						)}
					</tr>
				</thead>
				<tbody>
					{filteredItems.map((item, index) => {
						const { amount, description, date, category } = item;
						const dateModified = date.slice(0, 10);
						return (
							<tr key={item._id}>
								<td>{index + 1}</td>
								<td className="date-block">{dateModified}</td>
								<td>{category}</td>
								<td className="description-block">{description}</td>
								<td>{amount}</td>
							</tr>
						);
					})}
					<tr>
						<th>
							<b>Total</b>
						</th>
						<th>-</th>
						<th>-</th>
						<th>-</th>
						<th>
							<b>{total}</b>
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
