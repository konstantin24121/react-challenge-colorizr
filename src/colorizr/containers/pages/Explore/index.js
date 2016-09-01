import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainLayout from '@common/layout/Main';
import SelectedColor from '@colorizr/components/SelectedColor';
import Preset from '@colorizr/containers/Preset';

import { removeColorFromPalete } from '@colorizr/actions/palete';

export default class ExplorePage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {
			selectedPalete,
			removeColorFromPalete,
			isPresetsFetching,
			preset
		} = this.props;

		return (
			<MainLayout>
				<SelectedColor 
					colors={selectedPalete}
					removeColorFromPalete = {removeColorFromPalete} 
				/>
				<Preset 
					isFetching={isPresetsFetching} 
					preset={preset}
					/>
			</MainLayout>
		);
	}
}

function mapStateToProps(state) {
	return {
		selectedPalete: state.palete.get('colors'),
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		removeColorFromPalete: removeColorFromPalete
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ExplorePage);
