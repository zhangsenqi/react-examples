import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pureRender from 'pure-render-decorator';
@pureRender
class Header extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
				test header
			</div>
		);
	}
}
Header.propTypes = {
};
export default Header;