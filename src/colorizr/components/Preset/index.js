import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Icon} from 'react-fa';

import './style.scss';

export default class Preset extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="preset">
				<Row>
					<Col xs={12}>
						<h3 className="preset__title">Sample</h3>
					</Col>
				</Row>
				<Row>
					<ul className="preset__list">
						<li className="preset__item">
							<div className="preset__item-sample is-light" style={{backgroundColor: '#879785'}}>
								<Icon name='plus' className="preset__item-icon"/>
							</div>
							<div className="preset__item-value">#879785</div>
						</li>
						<li className="preset__item">
							<div className="preset__item-sample is-dark" style={{backgroundColor: '#879785'}}>
								<Icon name='plus' className="preset__item-icon"/>
							</div>
							<div className="preset__item-value">#879785</div>
						</li>
					</ul>
				</Row>
			</div>
		);
	}
}
