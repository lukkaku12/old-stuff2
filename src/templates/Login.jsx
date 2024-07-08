import React, {useRef} from 'react';
import '@styles/Login.scss';

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username : formData.get('email'),
			password : formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className="login">
			<div className="form-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">log in to your account</h1>
				<p className="subtitle">or create a new one</p>
				<form action="/" className="form" ref={form}>
					<label htmlFor="username" className="label">Email</label>
					<input type="text" name="email" placeholder="asdasda@gmail.com" className="input input-password" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button
					onClick={handleSubmit}
					 className="primary-button login-button">Log in</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
