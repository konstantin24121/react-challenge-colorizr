import React from 'react';
import Logo from '@common/Components/Logo';
import './style.scss';
import {Col, Row} from "react-bootstrap";

export default () => (
	<header className="header">
		<div className="container">
			<Row>
				<Col xs={12} md={4}>
					<Logo />
				</Col>
				<Col xs={12} md={4} md-offset={4}>
					
				</Col>
			</Row>
		</div>
	</header>
);