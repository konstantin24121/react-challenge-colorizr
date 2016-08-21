import React from 'react';
import {Link} from 'react-router';
import "./style.scss";

export default () => (
	<div className="logo">
		<Link to="/">
			<img src="/images/logo-dark.svg" alt="" height="100%"/>
		</Link>
	</div>
);