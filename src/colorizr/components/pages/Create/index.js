import React from 'react';

import {connect} from 'react-redux';
import {Header, Footer} from '@common/layout';
import ColorPicker from '@colorizr/components/Colorpicker';


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
					<ColorPicker color={this.props.colorpicker.color}/>
				</div>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		colorpicker: state.colorpicker
	};
}

export default connect(mapStateToProps)(CreatePage);