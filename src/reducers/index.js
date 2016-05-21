import { combineReducers } from 'redux'
import comparisons from './comparisons'
import items from './items'
import itemListFilter from './itemListFilter'
import itemListQuery from './itemListQuery'

const rootReducer = combineReducers({
 	comparisons,
 	items,
 	itemListFilter,
 	itemListQuery
})

export default rootReducer
