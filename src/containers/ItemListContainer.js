import { connect } from 'react-redux'
import { addComparison, removeComparison, setItemListFilter, searchItemList } from '../actions'
import ItemList from '../components/ItemList'


const queryItemList = (items, query) => {
	if(query !== '') {
		return items.filter(i =>
			i.name.toLowerCase().indexOf(query) > -1
		)		
	}
	else {
		return items
	}
}

const getVisibleItems = (items, filter, query) => {
	switch (filter) {
		case 'all':
			return queryItemList(items, query)
			
		default:
			let filteredItems = items.filter(i =>
				i.itemType === filter
			)
			return queryItemList(filteredItems, query)
	}
}

const mapStateToProps = (state) => {
    return {
    	items: getVisibleItems(state.items, state.itemListFilter, state.itemListQuery),
    	itemListFilter: state.itemListFilter,
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onItemListFilterClick: (filter) => {
			dispatch(setItemListFilter(filter))
		},
		onAddComparison: (id, name, itemType, ibuMin, ibuMax) => {
			dispatch(addComparison(id, name, itemType, ibuMin, ibuMax))
		},
		onSearchChange: (event) => {
			let clean = event.target.value.trim().toLowerCase()
			dispatch(searchItemList(clean))	
		},
		onDeleteComparison: (id) => {
			dispatch(removeComparison(id));
		}
	}
}

const ItemListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default ItemListContainer
