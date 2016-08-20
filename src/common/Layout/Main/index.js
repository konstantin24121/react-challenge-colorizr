import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Link} from 'react-router';

export default class MainLayout extends React.Component {
	static propTypes = {
		children: React.PropTypes.object
	}

	render() {
		return (
			<div>
				<Header />
				<div className="container">
					{this.props.children}
					<Link to="two">Two</Link>
				</div>
				<Footer /> 
			</div>
		);
	}
}
