import React from 'react';
import {Logo, Nav} from '@common/components';
import './style.scss';
import {Col, Row} from "react-bootstrap";
export default () => (
	<header className="header">
		<div className="container">
			<Row>
				<Col xs={12} sm={6} md={5}>
					<Logo />
				</Col>
				<Col xs={12} sm={6} md={5} mdOffset={2}>
					<Nav />
				</Col>
			</Row>
		</div>
	</header>
);