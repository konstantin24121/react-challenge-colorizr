import React from 'react';
import { connect } from 'react-redux';

import {Row, Col} from 'react-bootstrap';
import {Icon} from 'react-fa';
import Spinner from '@colorizr/components/Spinner';

import { fetchDataIfNeeded } from '@colorizr/actions/presets';

import './style.scss';

export default class Preset extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchDataIfNeeded();
	}

	renderPreset(){
		this.props.presets.forEach(function(item, key){
			console.log(key, item);
		})
		return (
			<div>
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
		)
	}

	renderLoader(){
		return (
			<Row>
				<Spinner isActive={this.props.isFetching} scale='4em'/>
			</Row>
		)
	}

	render() {
		return (
			<div className="preset">
				{ this.props.presets.size === 0 ? ::this.renderLoader() : ::this.renderPreset()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		isFetching: state.presets.get('isFetching'),
		presets: state.presets.get('presets')
	};
}

export default connect(mapStateToProps, {fetchDataIfNeeded})(Preset);