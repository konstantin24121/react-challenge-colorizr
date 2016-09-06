import React from 'react';
import {connect} from 'react-redux';
import tinycolor from 'tinycolor2';

import MainLayout from '@common/layout/Main';
import {Table} from 'react-bootstrap';

class ExportPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let ColorRow = this.props.selectedColors.map(function(item, key){
			var color = tinycolor(item);
	
			return (
				<tr>
					<td style={{backgroundColor: item}}></td>
					<td>{item}</td>
					<td>#{color.toHex().toUpperCase()}</td>
					<td></td>
				</tr>
			)
		})
		return (
			<MainLayout>
				<h1 className="text-center">Customize and Export colors for Sass, Less or Stylus</h1>
				<Table striped bordered condensed hover>
					<thead>
						<tr>
							<th>Color</th>
							<th>HEX</th>
							<th>RGB</th>
							<th>Variable name</th>
						</tr>
					</thead>
					<tbody>
						{ColorRow}
					</tbody>
				</Table>
			</MainLayout>
		);
	}
}

function mapStateToProps(state){
	return {
		selectedColors: state.palete.get('colors')
	}
}

export default connect(mapStateToProps)(ExportPage)


