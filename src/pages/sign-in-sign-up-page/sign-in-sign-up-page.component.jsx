import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-sign-up-page.styles.scss';

const SignInAndSignUpPage = () => (
	<div className="sign-in-page-and-sign-up-page">
		<SignIn />
		<SignUp />
	</div>
);

export default SignInAndSignUpPage;
