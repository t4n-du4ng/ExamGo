import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function AuthFeature(props) {
	return (
		<Routes>
			<Route path="signin" element={<SignIn />} />
			<Route path="singup" element={<SignUp />} />
		</Routes>
	);
}

export default AuthFeature;