import React from 'react';
import {connect} from 'react-redux';
import tinycolor from 'tinycolor2';

import MainLayout from '@common/layout/Main';
import {Table, FormControl} from 'react-bootstrap';

class ExportPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let {selectedColors} = this.props;
		if( selectedColors.size !== 0 ){
			let ColorRow = selectedColors.map(function(item, key){
				var color = tinycolor(item);
		
				return (
					<tr key={key} >
						<td style={{backgroundColor: item}}></td>
						<td>#{color.toHex().toUpperCase()}</td>
						<td>{color.toRgbString().toUpperCase()}</td>
						<td>
							<FormControl
								type = "text"
								placeholder = "Enter variable name"
							/>
						</td>
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
		}else{
			return (
				<MainLayout>
					<h1 className="text-center">Please choose colors at first</h1>
				</MainLayout>
			)
		}
	}
}

function mapStateToProps(state){
	return {
		selectedColors: state.palete.get('colors')
	}
}

export default connect(mapStateToProps)(ExportPage)


