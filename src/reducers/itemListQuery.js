const itemListQuery = (state='', action) => {
    switch(action.type) {
        case 'SEARCH_ITEM_LIST':
            return action.query
        default:
            return state
    }
}

export default itemListQuery
