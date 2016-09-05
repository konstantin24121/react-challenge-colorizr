import React from 'react';
import { connect } from 'react-redux';

import {Row} from 'react-bootstrap';
import Preset from '@colorizr/components/Preset';
import Spinner from '@colorizr/components/Spinner';

import { fetchDataIfNeeded } from '@colorizr/actions/presets';

class Presets extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchDataIfNeeded();
	}

	renderPreset(){
		let {
			removeColorFromPalete,
			addColorToPalete,
			selectedPalete
		} = this.props;

		let PresetsList = this.props.presets.map(function(item, key){
			return <Preset 
					name={key} 
					colors={item}
					selectedColors={selectedPalete}
					removeColorFromPalete = {removeColorFromPalete} 
					addColorToPalete = {addColorToPalete}
				/>
		});
		return (
			<div>
				{PresetsList}
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
			<div>
				{ this.props.presets.size === 0 ? ::this.renderLoader() : ::this.renderPreset()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		isFetching: state.presets.get('isFetching'),
		presets: state.presets.get('presets'),
		selectedPalete: state.palete.get('colors')
	};
}

export default connect(mapStateToProps, {fetchDataIfNeeded})(Presets);