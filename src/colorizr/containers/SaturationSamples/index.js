import React from 'react';
import Palete from '@colorizr/components/Palete';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { addColorToPalete, removeColorFromPalete, bulkRemoveFromPalete, bulkInsertToPalete} from '@colorizr/actions/colorpicker';

import '@colorizr/components/Palete/style.scss';
import './style.scss';

export default class SaturationSamples extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		let {
			selectedPalete, 
			saturatePalete,
			addColorToPalete,
			removeColorFromPalete,
			bulkRemoveFromPalete,
			bulkInsertToPalete
		} = this.props;
		
		return (
			<div className="saples _saturation">
				<div className="saples__box panel">
					<h2 className="saples__title">Darker and Lighter</h2>
					<Palete 
						selectedPalete = {selectedPalete} 
						saturatePalete = {saturatePalete}
						addColorToPalete = {addColorToPalete} 
						removeColorFromPalete = {removeColorFromPalete} 
						bulkRemoveFromPalete = {bulkRemoveFromPalete} 
						bulkInsertToPalete = {bulkInsertToPalete}
					/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		saturatePalete: state.saturate.get('colors'),
		selectedPalete: state.palete.get('colors')
	};
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
		addColorToPalete: addColorToPalete,
		removeColorFromPalete: removeColorFromPalete,
		bulkRemoveFromPalete: bulkRemoveFromPalete,
		bulkInsertToPalete: bulkInsertToPalete
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SaturationSamples);