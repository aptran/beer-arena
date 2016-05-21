import beerStyles from '../beer_styles.json'
import beers from '../beers.json'

let nextId = 0

const makeStyleObject = (o) => {
	let stylename = o.hasOwnProperty('shortName') ? o.shortName : o.name
	return {
		id: nextId++,
		name: stylename,
		itemType: 'style',
		ibuMin: o.ibuMin,
		ibuMax: o.ibuMax,
		comparing: false
	}
}

const makeBeerObject = (o) => {
	return {
		id: nextId++,
		name: o.name,
		itemType: 'beer',
		ibuMin: o.ibu,
		ibuMax: null,
		comparing: false
	}
}

const initialState = (beerStyles, beers) => {
	let beerItems = []
	beerStyles.map(i => 
		beerItems.push(makeStyleObject(i))
	)
	beers.map(beerPage =>
		beerPage.data.map(b =>
			beerItems.push(makeBeerObject(b))
		)
	)
	return beerItems
}

const item = (state, action) => {
	switch(action.type) {
		case 'ADD_COMPARISON':
			if(state.id !== action.id) {
				return state
			}
			return Object.assign({}, state, {
				comparing: true
			})

		case 'REMOVE_COMPARISON':
			if(state.id !== action.id) {
				return state
			}
			return Object.assign({}, state, {
				comparing: false
			})

		case 'CLEAR_COMPARISONS':
			return Object.assign({}, state, {
				comparing: false
			})

		default:
			return state
	}
}

const items = (state=initialState(beerStyles.data, beers), action) => {
	switch (action.type) {
		case 'ADD_COMPARISON':
			return state.map(i =>
				item(i, action)
			)

		case 'REMOVE_COMPARISON':
			return state.map(i =>
				item(i, action)
			)

		case 'CLEAR_COMPARISONS':
			return state.map(i => 
				item(i, action)
			)

		default:
			return state
	}
}

export default items
