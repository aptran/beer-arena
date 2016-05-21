import { connect } from 'react-redux'
import { removeComparison, clearComparisons } from '../actions'
import ComparisonList from '../components/ComparisonList'

const mapStateToProps = (state) => {
  return {
    comparisons: state.comparisons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteComparisonClick: (id) => {
      dispatch(removeComparison(id))
    },
    onClearComparisons: () => {
      dispatch(clearComparisons())
    },
  }
}

const ComparisonListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComparisonList)

export default ComparisonListContainer

