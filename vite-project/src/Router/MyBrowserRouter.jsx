/** @format */

import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Root } from "../pages/Root/Root";
import { Expense } from "../pages/Expense/Expense";
import { Income } from "../pages/Income/Income";
import { Saving } from "../pages/Saving/Saving";
import { FinanceReport } from "../pages/FinanceReport/FinanceReport";

const ErrorElement = () => {
	return <h1>Some Error Occurred / Route Not Found</h1>;
};

export const MyBrowserRouter = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorElement />,
		children: [
			{
				path: "",
				element: <Home />
			},
			{
				path: "expenses",
				element: <Expense />
			},
			{
				path: "incomes",
				element: <Income />
			},
			{
				path: "savings",
				element: <Saving />
			},
			{
				path: "finance_reports",
				element: <FinanceReport />
			}
		]
	}
]);
