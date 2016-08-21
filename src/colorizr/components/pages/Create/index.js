import React from 'react';
import ColorPicker from '@colorizr/components/Colorpicker';
import { Row } from 'react-bootstrap';

export default class CreatePage extends React.Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {
			color: 'red'
		};
	}


	render() {
		return (
			<div>
				<Row>
					<ColorPicker />
				</Row>
			</div>
		);
	}
}
