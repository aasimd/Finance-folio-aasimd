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

export const getItemsCategories = (items) =>
	items.reduce(
		(acc, item) =>
			acc.includes(item.category) ? acc : [...acc, item.category],
		[]
	);

export const filterItems = (items, isSorted, category) => {
	const sortedItems = isSorted
		? [...items].sort((a, b) => b.amount - a.amount)
		: items;
	const filteredByCategory =
		category === "All"
			? sortedItems
			: [...sortedItems].filter((item) => item.category === category);
	return filteredByCategory;
};
