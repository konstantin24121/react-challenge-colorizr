import React from 'react';
import MainLayout from '@common/layout/Main';

export default class PresentsPage extends React.Component {
	static propTypes = {
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MainLayout>
				<div>Presents page</div>
			</MainLayout>
		);
	}
}
