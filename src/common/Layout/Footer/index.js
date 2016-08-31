import React from 'react';
import { Col } from 'react-bootstrap';
import { Icon } from 'react-fa';
import "./style.scss";

export default () => (
	<footer className="footer">
		<div className="container">
			<Col xs={8}>
				Build with React, Redux, React Router and Immutable. <a href="https://github.com/rtivital/react-challenge-colorizr">ReactChalenge #2</a>, from jsraccoon.
			</Col>
			<Col xs={4} className='text-right'>
				<a className="footer__link" href="https://github.com/konstantin24121/react-challenge-colorizr"><Icon name="github" size='2x'/></a>
			</Col>
		</div>
	</footer>
);