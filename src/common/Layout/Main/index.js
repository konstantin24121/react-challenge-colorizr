import './style.scss';
import '@common/styles/index.scss';

import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default class MainLayout extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="mainframe">
					<div className="container">
						{this.props.children}
					</div>
				</div>
				<Footer /> 
			</div>
		);
	}
}
