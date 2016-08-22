import React from 'react';

import {connect} from 'react-redux';
import {Header, Footer} from '@common/layout';
import ColorPicker from '@colorizr/components/Colorpicker';
import Palite from '@colorizr/components/Palite'

class CreatePage extends React.Component {
	static propTypes = {
		colorpicker: React.PropTypes.object
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<div style={{backgroundColor: this.props.colorpicker.color}}>
					<div className="container">
						<ColorPicker color={this.props.colorpicker.color}/>
					</div>
					<div className="container">
						<Palite colors={this.props.palite.colors}/>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		colorpicker: state.colorpicker,
		palite: state.palite
	};
}

export default connect(mapStateToProps)(CreatePage);