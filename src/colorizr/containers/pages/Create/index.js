import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Header, Footer} from '@common/layout';
import ColorPicker from '@colorizr/components/Colorpicker';
import SelectedColor from '@colorizr/components/SelectedColor';
import SaturationSamples from '@colorizr/containers/SaturationSamples';
import MixSamples from '@colorizr/containers/MixSamples';

import {changeGlobalColor} from '@colorizr/actions/colorpicker';
import {removeColorFromPalete} from '@colorizr/actions/palete';
import {initSaturation} from '@colorizr/actions/saturation';
import {initMixed} from '@colorizr/actions/mixer';

class CreatePage extends React.Component {
	static propTypes = {
		colorpicker: React.PropTypes.object
	};

	constructor(props) {
		super(props);
	}

	render() {
		const {
			currentColor,
			selectedPalete,
			removeColorFromPalete} = this.props;

		return (
			<div>
				<Header />
				<div style={{backgroundColor: currentColor}}>
					<div className="container">
						<ColorPicker 
							color={currentColor} 
							changeGlobalColor={this.props.changeGlobalColor}
							initSaturation={this.props.initSaturation}
							initMixed={this.props.initMixed}
						/>
					</div>
					<div className="container">
						<SelectedColor 
							colors={selectedPalete}
							removeColorFromPalete = {removeColorFromPalete} 
						/>
						<SaturationSamples />
						<MixSamples />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		currentColor: state.colorpicker.get('color'),
		saturatePalete: state.saturate.get('colors'),
		selectedPalete: state.palete.get('colors')
	};
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
		changeGlobalColor: changeGlobalColor,
		initSaturation: initSaturation,
		removeColorFromPalete: removeColorFromPalete,
		initMixed: initMixed
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CreatePage);