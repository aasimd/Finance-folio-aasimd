/** @format */

import React from "react";

export const TableComponent = ({ items }) => {
	const total = items.reduce((acc, curr) => acc + curr.amount, 0);
	return (
		<div>
			<table>
				<thead>
					<tr>
						{["Number", "Date", "Category", "Description", "Amount"].map(
							(e, index) => (
								<th key={index}>
									<b>{e}</b>
								</th>
							)
						)}
					</tr>
				</thead>
				<tbody>
					{items.map((item, index) => {
						const { amount, description, date, category } = item;
						const dateModified = date.slice(0, 10);
						return (
							<tr key={item._id}>
								<td>{index + 1}</td>
								<td>{dateModified}</td>
								<td>{category}</td>
								<td>{description}</td>
								<td>{amount}</td>
							</tr>
						);
					})}
					<tr>
						<th>
							<b>Total</b>
						</th>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<th>
							<b>{total}</b>
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
