import React from 'react';
import MainLayout from '@common/layout/Main';

export default class ExplorePage extends React.Component {
	static propTypes = {
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MainLayout>
				<div>Explore page</div>
			</MainLayout>
		);
	}
}
