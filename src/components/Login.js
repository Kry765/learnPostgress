import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/_login.scss'

export default class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			pwd: '',
		}
	}

	handleEmail = event => {
		this.setState({ email: event.target.value })
	}

	handlePassword = event => {
		this.setState({ pwd: event.target.value })
	}

	handleSubmit = event => {
		event.preventDefault()
		const API = 'http://localhost:5000/login'
		fetch(API, {
			method: 'POST',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: this.state.email, pwd: this.state.pwd }),
		})
			.then(response => response.json())
			.then(data => {
				console.log(data)
			})
			.catch(error => console.error(error))
	}

	render() {
		return (
			<div>
				<header className='header'>
					<div className='header__position'>
						<h1 className='header__welcome-h1'>Hello Again!</h1>
						<p className='header__welcome-text'>Please enter your details</p>
					</div>
				</header>
				<main>
					<form onSubmit={this.handleSubmit}>
						<div>
							<div className='container'>
								<div className='form-account'>
									<input
										type='text'
										className='form-account__input-account'
										placeholder='Email'
										onChange={this.handleEmail}
									/>
									<input
										type='password'
										className='form-account__input-account'
										placeholder='Password'
										onChange={this.handlePassword}
									/>
									<p>
										<span className='form-account__forgot-password'>
											<Link to='/Resetpassword'>Forgot password</Link>
										</span>
									</p>
								</div>
								<button type='submit' className='signin-btn'>
									Sign in
								</button>
								<p>
									Don't have an accound?{' '}
									<span className='bottom-signup-link'>
										<Link to='/Register'>Sign up</Link>
									</span>
								</p>
							</div>
						</div>
					</form>
				</main>
			</div>
		)
	}
}
