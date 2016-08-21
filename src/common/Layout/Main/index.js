import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Link} from 'react-router';
import './style.scss';

export default class MainLayout extends React.Component {
	static propTypes = {
		children: React.PropTypes.object
	}

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
