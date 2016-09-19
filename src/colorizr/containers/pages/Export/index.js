import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import tinycolor from 'tinycolor2';

import MainLayout from '@common/layout/Main';
import {Table, FormControl, Navbar, Nav, NavItem} from 'react-bootstrap';
import FormatToggle from '@colorizr/components/FormatToggle';
import ExportCode from '@colorizr/components/ExportCode';

import {changeFormat, changeLanguage, changeValueName} from '@colorizr/actions/export';
import {saveLanguage, saveVariablesNames} from '@colorizr/utils/dataSaver';
import * as CONST from '@colorizr/config/constants';

class ExportPage extends React.Component {

	constructor(props) {
		super(props);
	}

	handleChange(key, e){
		let value = e.nativeEvent.target.value;
		this.props.changeValueName(key, value);
	}

	componentWillReceiveProps(nextProps) {
		if( nextProps.language !== this.props.language ){
			saveLanguage(nextProps.language);
			console.log('Save language');
		}
		if( !nextProps.variablesNames.equals(this.props.variablesNames) ){
			saveVariablesNames(nextProps.variablesNames);
			console.log('Save variables names');
		}
	}

	render() {
		let {selectedColors, variablesNames, format, language, changeFormat, changeLanguage} = this.props;
		let handleChange = this.handleChange;

		if( selectedColors.size !== 0 ){
			let ColorRow = variablesNames.zip(selectedColors).map(function(item, key){
				let color = tinycolor(item[1]);
				return (
					<tr key={key} >
						<td style={{backgroundColor: item[1]}}></td>
						<td>#{color.toHex().toUpperCase()}</td>
						<td>{color.toRgbString().toUpperCase()}</td>
						<td>
							<FormControl
								type = "text"
								placeholder = "Enter variable name"
								value = {item[0]}
								onChange={handleChange.bind(this, key)}
							/>
						</td>
					</tr>
				)
			}.bind(this))

			return (
				<MainLayout>
					<h1 className="text-center" style={{marginBottom: '1em'}}>Customize and Export colors for Sass, Less or Stylus</h1>
					<Table striped bordered condensed hover responsive style={{marginBottom: '3em'}}>
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
					<Navbar style={{marginBottom: 0, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}>
						<Navbar.Header>
							<Navbar.Brand>
								Export code
							</Navbar.Brand>
							<Navbar.Toggle />
						</Navbar.Header>
						<Navbar.Collapse>
							<Nav>
								<NavItem active={language === CONST.LANGUAGE_SASS} onClick={changeLanguage.bind(null, CONST.LANGUAGE_SASS)}> SASS(SCSS)</NavItem>
								<NavItem active={language === CONST.LANGUAGE_LESS} onClick={changeLanguage.bind(null, CONST.LANGUAGE_LESS)}> LESS</NavItem>
								<NavItem active={language === CONST.LANGUAGE_STYLUS} onClick={changeLanguage.bind(null, CONST.LANGUAGE_STYLUS)}> Stylus</NavItem>
							</Nav>
							<Navbar.Form pullRight>
								<FormatToggle format={format} changeFormat={changeFormat}/>
							</Navbar.Form>
						</Navbar.Collapse>
					</Navbar>
					<ExportCode 
						language={language}
						format={format}
						selectedColors={selectedColors}
						variablesNames={variablesNames} />
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
		selectedColors: state.palete.get('colors'),
		variablesNames: state.export.get('variablesNames'),
		format: state.export.get('format'),
		language: state.export.get('language')
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
		changeFormat: changeFormat,
		changeLanguage: changeLanguage,
		changeValueName: changeValueName
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ExportPage)


