import React, { PropTypes } from 'react'

const formatIBU = (ibuMin, ibuMax) => {
	if(ibuMax !== null) {
		let hasIBUMin = ibuMin !== undefined ? ibuMin : '?'
		let hasIBUMax = ibuMax !== undefined ? ibuMax : '?'
		return hasIBUMin + '-' + hasIBUMax
	}
	else {
		return ibuMin
	}
}

const wideFormat = (name, itemType, ibuMin, ibuMax, onDeleteClick) => {
	return (
		<div className={'column ' + itemType}>
			<div className='row'>
			    <button className={'delete-column-btn'}
					onClick={onDeleteClick}>
					X
				</button>
			</div>
	    	<div className='column-info'>
	    		<h2>{name}</h2>
	    		<hr />
	    		<table className='table table-striped table-borderless'>
	    			<tbody>
		    			<tr>
		    				<td>ABV</td>
		    				<td>?</td>
		    			</tr>
		    			<tr>
		    				<td>IBU</td>
		    				<td>{formatIBU(ibuMin, ibuMax)}</td>
		    			</tr>
		    			<tr>
		    				<td>SRM</td>
		    				<td>?</td>
		    			</tr>
		    			<tr>
		    				<td>Original Gravity</td>
		    				<td>Varies</td>
		    			</tr>
		    			<tr>
		    				<td>Final Gravity</td>
		    				<td>?</td>
		    			</tr>
	    			</tbody>
	    		</table>
	    	</div>
	    </div>
	)
}


const narrowFormat = (name, itemType, ibuMin, ibuMax, onDeleteClick) => {
	return (
		<div className={'row comparison-row ' + itemType}>
			<div className='col-xs-4 v-middle'>
				{name}
			</div>
			<div className='col-xs-2 v-middle text-center'>
				{formatIBU(ibuMin, ibuMax)}
			</div>
			<div className='col-xs-2 v-middle text-center'>
				?
			</div>
			<div className='col-xs-2 v-middle text-center'>
				?
			</div>
			<div className='col-xs-2 v-middle text-right'>
			    <button className={'delete-row-btn'}
					onClick={onDeleteClick}>X</button>
			</div>
		</div>
	)
}

const Comparison = ({name, itemType, ibuMin, ibuMax, onDeleteClick}) => (
	name === '' ? wideFormat(name, itemType, ibuMin, ibuMax, onDeleteClick) : narrowFormat(name, itemType, ibuMin, ibuMax, onDeleteClick)

)

export default Comparison
