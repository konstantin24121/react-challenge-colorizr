import React from 'react';
import '@common/styles/index.scss';
import {Router, browserHistory, IndexRedirect , Route} from 'react-router';
import MainLayout from '@common/layout/Main';
import { ExplorePage, CreatePage, ExportPage, PresentsPage } from './components/pages';
import NotFound from '@common/pages/NotFound';

export default () => (
	<Router history={browserHistory}>
		<Route path="/" component={MainLayout}>
			<IndexRedirect to='/create'></IndexRedirect>
			<Route path="/create" component={CreatePage}></Route>
			<Route path="/explore" component={ExplorePage}></Route>
			<Route path="/export" component={ExportPage}></Route>
			<Route path="/presents" component={PresentsPage}></Route>
			<Route path='*' component={NotFound} />
		</Route>
	</Router>
);
