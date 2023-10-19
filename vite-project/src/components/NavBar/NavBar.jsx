/** @format */

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { setActiveLinks } from "../../functions/utils";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export const NavBar = () => {
	const navigate = useNavigate();
	return (
		<div className="nav-bar">
			<div className="first-nav-div">
				<h1 onClick={() => navigate("/")}>FinanceFolio </h1>
				<span>
					<b>Source Code: </b>
					<a
						target="_blank"
						href="https://github.com/aasimd/Finance-folio-aasimd"
					>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</span>
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
