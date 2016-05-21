
export const addComparison = (id, name, itemType, ibuMin, ibuMax) => {
	return {
		type: 'ADD_COMPARISON',
		id,
		name,
		itemType,
		ibuMin,
		ibuMax
	}
}


export const removeComparison = (id) => {
	return {
		type: 'REMOVE_COMPARISON',
		id
	}
}

export const clearComparisons = () => {
	return {
		type: 'CLEAR_COMPARISONS'
	}
}


export const setItemListFilter = (itemType) => {
	return {
		type: 'SET_ITEM_LIST_FILTER',
		itemType
	}
}


export const searchItemList = (query) => {
	return {
		type: 'SEARCH_ITEM_LIST',
		query
	}
}
