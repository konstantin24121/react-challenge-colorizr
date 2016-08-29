import React from 'react';
import Palete from '@colorizr/components/Palete';
import ColorPicker from 'react-color-picker';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { addColorToPalete, removeColorFromPalete, bulkRemoveFromPalete, bulkInsertToPalete} from '@colorizr/actions/colorpicker';

import '@colorizr/components/Palete/style.scss';
// import './style.scss';

export default class MixSamples extends React.Component {
	constructor(props) {
		super(props);
	}

	onDrag(color){
		console.log(color)
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
			<div className="samples _saturation">
				<div className="samples__box panel">
					<h2 className="samples__title">
						Mix with
						<span className="mix">
							<div className="mix__picker">
								<ColorPicker value="#ffffff" onDrag={::this.onDrag} />
							</div>
						</span>
					</h2>
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

export default connect(mapStateToProps, matchDispatchToProps)(MixSamples);