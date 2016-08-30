import React from 'react';
import Palete from '@colorizr/components/Palete';
import Mixer from '@colorizr/components/Mixer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { addColorToPalete, removeColorFromPalete, bulkRemoveFromPalete, bulkInsertToPalete} from '@colorizr/actions/palete';
import { changeMixColor } from '@colorizr/actions/mixer';

import '@colorizr/components/Palete/style.scss';
// import './style.scss';

export default class MixSamples extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {
			mixcolor,
			selectedPalete, 
			mixPalete,
			addColorToPalete,
			removeColorFromPalete,
			bulkRemoveFromPalete,
			bulkInsertToPalete,
			changeMixColor,
			currentColor
		} = this.props;
		
		return (
			<div className="samples _saturation">
				<div className="samples__box panel">
					<h2 className="samples__title">
						Mix with
						<Mixer color={mixcolor} currentColor={currentColor} onDrag={changeMixColor} />
					</h2>
					<Palete 
						selectedPalete = {selectedPalete} 
						palete = {mixPalete}
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
		currentColor: state.colorpicker.get('color'),
		mixcolor: state.mixer.get('mix'),
		mixPalete: state.mixer.get('colors'),
		selectedPalete: state.palete.get('colors')
	};
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
		addColorToPalete: addColorToPalete,
		removeColorFromPalete: removeColorFromPalete,
		bulkRemoveFromPalete: bulkRemoveFromPalete,
		bulkInsertToPalete: bulkInsertToPalete,
		changeMixColor: changeMixColor
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MixSamples);