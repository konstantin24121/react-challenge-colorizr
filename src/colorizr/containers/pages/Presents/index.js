import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainLayout from '@common/layout/Main';
import SelectedColor from '@colorizr/components/SelectedColor';
import Schemes from '@colorizr/containers/Schemes';

import { removeColorFromPalete } from '@colorizr/actions/palete';

class PresentsPage extends React.Component {
	static propTypes = {
	};

	constructor(props) {
		super(props);
	}

	render() {
		const {
			selectedPalete,
			removeColorFromPalete
		} = this.props;
		return (
			<MainLayout>
				<SelectedColor 
					colors={selectedPalete}
					removeColorFromPalete = {removeColorFromPalete} 
				/>
				<Schemes 
					colors={selectedPalete}
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
		removeColorFromPalete: removeColorFromPalete
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PresentsPage);