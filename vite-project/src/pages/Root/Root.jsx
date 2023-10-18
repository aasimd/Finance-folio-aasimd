/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";

export const Root = () => {
	return (
		<div>
			<nav>
				<NavBar />
			</nav>
			<section>
				<Outlet />
			</section>
		</div>
	);
};
