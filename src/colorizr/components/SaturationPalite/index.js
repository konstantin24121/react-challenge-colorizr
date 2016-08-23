import React from 'react';
import {Button} from 'react-bootstrap';
import '@colorizr/components/Palite/style.scss';
import './style.scss';

export default class SaturationPalite extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			lightBg: true
		}
	}
	changeBackground(){
		this.setState({...this.state, lightBg: !this.state.lightBg})
	}
	render() {
		let Colors = this.props.colors.map(function(item, i ){
			return <li key={i} className="palite__set-item" style={{backgroundColor: item}}></li>;
		})
		let {lightBg} = this.state;
		return (
			<div className="palite _saturation">
				<div className="palite__box panel">
					<h2 className="palite__title">Darker and Lighter</h2>
					<ul className={`palite__set ${lightBg ? '_light' : '_dark'}`}>
						{Colors}
					</ul>
					<div className="palite__tools">
						<Button className="palite__btn" onClick={::this.changeBackground}> {lightBg ? 'Light' : 'Dark'} background</Button>
						<Button className="palite__btn">Select All</Button>
					</div>
				</div>
			</div>
		);
	}
}