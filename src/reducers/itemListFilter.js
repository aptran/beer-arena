
const itemListFilter = (state='all', action) => {
	switch(action.type) {
		case 'SET_ITEM_LIST_FILTER':
			return action.itemType
		default:
			return state
	}
}

export default itemListFilter
