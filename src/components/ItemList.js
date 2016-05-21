import React, { PropTypes } from 'react'
import Item from './Item'

const ItemList = ({items, itemListFilter, onAddComparison, onItemListFilterClick, onSearchChange, onDeleteComparison }) => (
	<div className={'col-md-4 item-list-container'}>
		<div className={'item-list-filter'}>
			<div className={'item-list-search'}>
				<input type='text' 
					placeholder='Search by name' 
					onChange={onSearchChange.bind(this)}></input>
			</div>


			<div>
				<button className={'item-list-filter-btn'} 
					onClick={() => onItemListFilterClick('all')}
					disabled={itemListFilter === 'all' ? true : false}>ALL</button>
				<button className={'item-list-filter-btn'} 
					onClick={() => onItemListFilterClick('style')}
					disabled={itemListFilter === 'style' ? true : false}>STYLES</button>
				<button className={'item-list-filter-btn'} 
					onClick={() => onItemListFilterClick('beer')}
					disabled={itemListFilter === 'beer' ? true : false}>BEERS</button>
			</div>
		</div>


		<div className={'item-list'}>
		{ items.length !== 0 ?
				items.map(item => 
					<Item
					key={item.id}
					onAddItem={onAddComparison}
					onDeleteComparison={onDeleteComparison}
					{...item} />
				)
				: <h3 className='text-center'>No matches found.</h3>
		}
		</div>
	</div>
)

export default ItemList
