const comparison = (state, action) => {
  switch (action.type) {
    case 'ADD_COMPARISON':
      return {
        id: action.id,
        name: action.name,
        itemType: action.itemType,
        ibuMin: action.ibuMin,
        ibuMax: action.ibuMax
      }

    default:
      return state
  }
}

const comparisons = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMPARISON':
      return [
        ...state,
        comparison(undefined, action)
      ]

    case 'REMOVE_COMPARISON':
      return state.filter(t =>
        t.id !== action.id
      )

    case 'CLEAR_COMPARISONS':
      return []

    default:
      return state
  }
}

export default comparisons
