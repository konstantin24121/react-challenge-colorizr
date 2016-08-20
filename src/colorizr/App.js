import React from 'react';
import '@common/styles/index.scss';
import {Router, browserHistory, IndexRoute, Route} from 'react-router';
import MainLayout from '@common/Layout/Main';
import MainPage from './components/pages/Main';
import Two from './components/pages/Two';
import NotFound from '@common/pages/NotFound';

export default () => (
	<Router history={browserHistory}>
		<Route path="/" component={MainLayout}>
			<IndexRoute components={MainPage}></IndexRoute>
			<Route path="two" component={Two}></Route>
			<Route path='*' component={NotFound} />
		</Route>
	</Router>
);
