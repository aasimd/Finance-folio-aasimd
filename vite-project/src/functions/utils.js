/** @format */

export const setActiveLinks = ({ isActive }) =>
	isActive
		? {
				color: "red",
				fontWeight: 700
		  }
		: {
				color: "black"
		  };
