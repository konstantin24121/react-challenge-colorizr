import React from 'react';

import {connect} from 'react-redux'

import {Row} from 'react-bootstrap';
import Spinner from '@colorizr/components/Spinner';
import Scheme from '@colorizr/components/Scheme';

import {fetchShemesIfNeeded} from '@colorizr/actions/schemes';
import {bulkInsertToPalete, bulkRemoveFromPalete} from '@colorizr/actions/palete';


class Schemes extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.fetchShemesIfNeeded();
	}

	renderLoader(){
		return (
			<Row>
				<Spinner isActive={this.props.isFetching} scale='4em'/>
			</Row>
		)
	}

	renderSchemes(){
		let {
			selectedPalete,
			bulkInsertToPalete,
			bulkRemoveFromPalete
		} = this.props;

		let SchemesList = this.props.schemes.map(function(item, key){
			return <Scheme 
					name={key} 
					colors={item}
					selectedColors={selectedPalete}
					bulkInsertToPalete={bulkInsertToPalete}
					bulkRemoveFromPalete={bulkRemoveFromPalete}
				/>
		});
		return (
			<div>
				{SchemesList}
			</div>
		)
	}

	render() {
		return (
			<div>
				{console.log(this.props.schemes)}
				{ this.props.schemes.size === 0 ? ::this.renderLoader() : ::this.renderSchemes()}
			</div>
		);
	}
}

function mapStatsToProps(state) {
	return {
		isFetching: state.schemes.get('isFetching'),
		schemes: state.schemes.get('schemes'),
		selectedPalete: state.palete.get('colors')
	}
}

export default connect(mapStatsToProps, {fetchShemesIfNeeded, bulkInsertToPalete, bulkRemoveFromPalete})(Schemes);