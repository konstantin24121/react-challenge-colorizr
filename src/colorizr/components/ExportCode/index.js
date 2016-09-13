import React from 'react';
import tinycolor from 'tinycolor2';

import './style.scss';

import * as CONST from '@colorizr/constants';

export default class ExportCode extends React.Component {

	renderTemplate(name, color, key ){
		switch(this.props.language){
			case CONST.LANGUAGE_SASS: 
				return <div className="code__row" key={key}><span className="code__var">${name}:</span> {color}</div>;

			case CONST.LANGUAGE_LESS: 
				return <div className="code__row" key={key}><span className="code__var">@{name}:</span> {color}</div>;

			case CONST.LANGUAGE_STYLUS: 
				return <div className="code__row" key={key}><span className="code__var">{name} =</span> {color}</div>;

			default: 
				return ''
		}
	}
	render() {
		let {format, selectedColors, variablesNames} = this.props;
		let Codes = variablesNames.zip(selectedColors).map(function(item, key){
			let color = tinycolor(item[1]);
			switch(format){
				case CONST.FORMAT_RGB:{
					return this.renderTemplate(item[0], color.toRgbString().toLowerCase(), key);
				}
				case CONST.FORMAT_HEX:{
					return this.renderTemplate(item[0], `#${color.toHex().toUpperCase()}`, key);
				}
			}
			
		}.bind(this))
		return (
			<div className="code">
				{Codes}
			</div>
		);
	}
}
