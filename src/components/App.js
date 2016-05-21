import React from 'react'
import ItemListContainer from '../containers/ItemListContainer'
import ComparisonListContainer from '../containers/ComparisonListContainer'

const App = () => (
	<div className={'container'}>
		<div className={'row header'}>
			<div className={'col-md-12 text-center'}>
				<h1 className={'header-title'}>BEER ARENA</h1>
			</div>
		</div>
		<div className={'row'}>
			<ItemListContainer />
			<ComparisonListContainer />
		</div>
	</div>	
)

export default App
