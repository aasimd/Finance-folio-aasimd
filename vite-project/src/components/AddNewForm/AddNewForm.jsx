/** @format */

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddNewForm.css";
export const AddNewForm = ({ type, submitAction }) => {
	const dispatch = useDispatch();
	const [newForm, setNewForm] = useState({
		category: "",
		amount: 0,
		date: "",
		description: ""
	});
	return (
		<div className="form-class">
			<div>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						const item = {
							category: newForm.category,
							amount: Number(newForm.amount),
							date: newForm.date,
							description: newForm.description
						};
						dispatch(submitAction(item));
					}}
				>
					<h2>Add new {type}?</h2>
					<div>
						<label htmlFor="add-new-category">Category: </label>
						<input
							required
							type="text"
							value={newForm.category}
							onChange={(event) =>
								setNewForm((p) => ({ ...p, category: event.target.value }))
							}
						/>
					</div>
					<div>
						<label htmlFor="add-new-amount">Amount: </label>
						<input
							required
							type="number"
							value={newForm.amount}
							onChange={(event) =>
								setNewForm((p) => ({ ...p, amount: event.target.value }))
							}
						/>
					</div>
					<div>
						<label htmlFor="add-new-date">Date: </label>
						<input
							type="date"
							required
							value={newForm.date}
							onChange={(event) =>
								setNewForm((p) => ({ ...p, date: event.target.value }))
							}
						/>
					</div>
					<div>
						<label htmlFor="add-new-description">Description: </label>
						<input
							type="text"
							value={newForm.description}
							required
							onChange={(event) =>
								setNewForm((p) => ({ ...p, description: event.target.value }))
							}
						/>
					</div>
					<div className="form-buttons">
						<input type="submit" value={"Add"} />
						<input type="reset" value={"Clear Form"} />
					</div>
				</form>
			</div>
		</div>
	);
};
