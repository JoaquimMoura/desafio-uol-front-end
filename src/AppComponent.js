import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPlantaoComponent from './Components/plantao/ListPlantaoComponent';
import AddPlantaoComponent from './Components/plantao/AddPlantaoComponent';

function AppComponent() {
	return (
		<div className="container">
			<Router>
				<Suspense fallback={<div div className="col-md-12">Loading...</div>}>
					<h1 className="text-center" style={style}>Teste UOL</h1>
					<Switch>
						<Route path="/" exact component={ListPlantaoComponent} />
						<Route path="/list-plantoes" component={ListPlantaoComponent} />
						<Route path="/add-plantao" component={AddPlantaoComponent} />
					</Switch>
				</Suspense>
			</Router>
		</div>
	);
}

const style = {
	color: 'red',
	margin: '10px'
}

export default AppComponent;