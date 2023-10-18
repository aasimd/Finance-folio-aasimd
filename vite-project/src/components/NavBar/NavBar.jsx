/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

import { setActiveLinks } from "../../functions/utils";
import "./NavBar.css";

export const NavBar = () => {
	return (
		<div className="nav-bar">
			<div>
				<h1>
					<NavLink style={setActiveLinks} to="/">
						FinanceFolio
					</NavLink>
				</h1>
			</div>
			<ul>
				<li>
					<NavLink style={setActiveLinks} to="/incomes">
						Incomes
					</NavLink>
				</li>
				<li>
					<NavLink style={setActiveLinks} to="/expenses">
						Expenses
					</NavLink>
				</li>
				<li>
					<NavLink style={setActiveLinks} to="/savings">
						Savings
					</NavLink>
				</li>
				<li>
					<NavLink style={setActiveLinks} to="/finance_reports">
						Finance Reports
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
