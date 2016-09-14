import React from 'react';
import {FormGroup} from 'react-bootstrap';
import Toggle from 'react-toggle';
import * as CONST from '@colorizr/config/constants';
import {saveFormat} from '@colorizr/utils/dataSaver';

import './style.scss';

export default class FormatToggle extends React.Component {

	componentWillReceiveProps(nextProps) {
		if( nextProps.format !== this.props.format ){
			saveFormat(nextProps.format);
			console.log('Save format');
		}
	}

	render() {
		let {format, changeFormat} = this.props;
		return (
			<FormGroup className="format-toggle">
				<span className={`format-toggle__label ${ format === CONST.FORMAT_HEX ? 'is-active' : '' }`}>HEX</span>
				<div className="format-toggle__toggle">
					<Toggle defaultChecked={!!format}
							onChange={ format === CONST.FORMAT_RGB ? changeFormat.bind(null, CONST.FORMAT_HEX) : changeFormat.bind(null, CONST.FORMAT_RGB)}/>
				</div>
				<span className={`format-toggle__label ${ format === CONST.FORMAT_RGB ? 'is-active' : '' }`}>RGB</span>
			</FormGroup>
		);
	}
}
