import React, { PropTypes } from 'react'

const Item = ({id, name, itemType, ibuMin, ibuMax, comparing, onAddItem, onDeleteComparison}) => (

	<button className={'item text-left ' + itemType + (comparing ? ' item-selected' : '')}
		onClick={comparing ? (() => onDeleteComparison(id)) : (() => onAddItem(id, name, itemType, ibuMin, ibuMax))}>

		<div className={'row'}>
			<div className={'col-xs-9'}>
				<p>{name}</p>
			</div>
			<div className={'col-xs-3 text-center'}>
				{comparing ? <p>&#10004;</p> : (itemType === 'style' ? <p>S</p> : <p>B</p>)}
			</div>
		</div>

	</button>

)

export default Item
