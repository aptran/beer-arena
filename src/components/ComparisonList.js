import React, { PropTypes } from 'react'
import Comparison from './Comparison'


const ComparisonList = ({comparisons, onClearComparisons, onDeleteComparisonClick}) => (
	<div className={'col-md-8 comparison-list-container'}>
		<div className={'row comparison-list-header'}>
			<div className={'col-xs-4 v-middle'}>
				<h2>Name</h2>
			</div>
			<div className={'col-xs-2 v-middle text-center'}>
				<h2>ABV</h2>
			</div>
			<div className={'col-xs-2 v-middle text-center'}>
				<h2>IBU</h2>
			</div>
			<div className={'col-xs-2 v-middle text-center'}>
				<h2>SRM</h2>
			</div>
			<div className={'col-xs-2 v-middle text-right'}>
				<button className={'clear-comparisons-btn'} 
					onClick={() => onClearComparisons()}>CLEAR</button>
			</div>
		</div>

		<div className='row comparison-list-rows'>
		{comparisons.map(column =>
			<Comparison 
				key={column.id} 
				{...column} 
				onDeleteClick={() => onDeleteComparisonClick(column.id)} />
		)}
		</div>
	</div>
)

export default ComparisonList