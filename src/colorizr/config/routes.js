import React from 'react';
import {Router, browserHistory, IndexRedirect , Route} from 'react-router';

import { ExplorePage, CreatePage, ExportPage, PresentsPage } from '@colorizr/containers/pages';
import NotFound from '@common/pages/NotFound';

export default () => (
	<Router history={browserHistory}>
		<Route path="/">
			<IndexRedirect to='/create'></IndexRedirect>
			<Route path="/create" component={CreatePage}></Route>
			<Route path="/explore" component={ExplorePage}></Route>
			<Route path="/export" component={ExportPage}></Route>
			<Route path="/presents" component={PresentsPage}></Route>
			<Route path='*' component={NotFound} />
		</Route>
	</Router>
);