import React from 'react';
import './style.scss';

export default class Palite extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		let Colors = this.props.colors.map(function(item, i ){
			return <li key={i} className="palite__set-item" style={{backgroundColor: item}}></li>;
		})
		return (
			<div className="palite">
				<div className="palite__box panel">
					<h2 className="palite__title">Select up to ten colors</h2>
					<h4	className="palite__descr">Select Colors by clicking on them</h4>
					<ul className="palite__set">
						{Colors}
					</ul>
				</div>
			</div>
		);
	}
}
