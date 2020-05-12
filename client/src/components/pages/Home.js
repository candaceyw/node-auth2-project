import React, { useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
	const authContext = useContext(AuthContext);
	const { user, loadUser } = authContext;
	useEffect(() => {
		loadUser();
		// eslint-disable-next-line
	}, []);

	console.log('user', user);
	if (user !== null && user.length === 0) {
		return <h4>Please add a Users</h4>;
	}
	return (
		<div>
			<ul>
				{user.map((e) => {
					return <li key={e.id}>{e.username}</li>;
				})}
			</ul>
		</div>
	);
};

export default Home;
