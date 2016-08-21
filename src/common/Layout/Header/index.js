import React from 'react';
import {Logo, Nav} from '@common/components';
import './style.scss';
import {Col, Row} from "react-bootstrap";
export default () => (
	<header className="header">
		<div className="container">
			<Row>
				<Col xs={12} md={4}>
					<Logo />
				</Col>
				<Col xs={12} md={4} mdOffset={4}>
					<Nav />
				</Col>
			</Row>
		</div>
	</header>
);