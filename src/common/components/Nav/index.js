import React from 'react';
import { Link } from "react-router";
import { Button, Row } from 'react-bootstrap';
import './style.scss';

export default class Nav extends React.Component {
	static propTypes = {
		name: React.PropTypes.string
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<menu className="nav">
				<Row>
					<Link to="/create">
						<Button bsStyle="danger" className="nav__btn">
							Create
						</Button>
					</Link>
				
					<Link to="/explore">
						<Button bsStyle="danger" className="nav__btn">
							Explore
						</Button>
					</Link>
				
					<Link to="/presents">
						<Button bsStyle="danger" className="nav__btn">
							Presents
						</Button>
					</Link>
				
					<Link to="/export">
						<Button bsStyle="danger" className="nav__btn">
							Export
						</Button>
					</Link>
				</Row>
				
			</menu>
		);
	}
}
