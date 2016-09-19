import React from 'react';
import Immutable from 'immutable';

import {Icon} from 'react-fa';

import './style.scss';

export default class Scheme extends React.Component {

	constructor(props) {
		super(props);
	}

	isActive(){
		let colors = new Immutable.OrderedSet(this.props.colors);
		return colors.isSubset(this.props.selectedColors)
	}

	render() {
		let {name, colors, bulkInsertToPalete, bulkRemoveFromPalete} = this.props;

		let Palete = colors.map(function(item, key){
			return <li key={key} className="scheme__item" style={{backgroundColor: item}}></li>
		})
		return (
			<div className={`scheme panel ${ (::this.isActive()) ? 'is-selected': null}`} 
				onClick={(::this.isActive()) ? bulkRemoveFromPalete.bind(null, colors) : bulkInsertToPalete.bind(null, colors)}>
				<h2 className="scheme__name">
					{name}
					{ (::this.isActive()) ? <Icon name="check" className="pull-right" style={{fontSize: '50%'}}/> : null }
				</h2>
				<ul className="scheme__palete">
					{Palete}
				</ul>
			</div>
		);
	}
}
