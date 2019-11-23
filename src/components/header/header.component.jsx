import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link to="/shop" className="option">
				Shop
			</Link>
			<Link to="/contact-us" className="option">
				Contact Us
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					Sign Out
				</div>
			) : (
				<Link className="option" to="/signin">
					Sign In
				</Link>
			)}
		</div>
	</div>
);

const mapStateProps = (state) => ({
	currentUser: state.user.currentUser
});

export default connect(mapStateProps)(Header);
