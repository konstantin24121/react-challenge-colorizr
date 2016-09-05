import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainLayout from '@common/layout/Main';
import SelectedColor from '@colorizr/components/SelectedColor';
import Presets from '@colorizr/containers/Presets';

import { removeColorFromPalete, addColorToPalete } from '@colorizr/actions/palete';

class ExplorePage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {
			selectedPalete,
			removeColorFromPalete,
			addColorToPalete
		} = this.props;

		return (
			<MainLayout>
				<SelectedColor 
					colors={selectedPalete}
					removeColorFromPalete = {removeColorFromPalete} 
				/>
				<Presets 
					removeColorFromPalete = {removeColorFromPalete} 
					addColorToPalete = {addColorToPalete} 
				/>
			</MainLayout>
		);
	}
}

function mapStateToProps(state) {
	return {
		selectedPalete: state.palete.get('colors')
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		removeColorFromPalete: removeColorFromPalete,
		addColorToPalete: addColorToPalete
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ExplorePage);
