import React from 'react'
import '../scss/_register.scss'
import { Link } from 'react-router-dom'
export default class Register extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
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
		fetch('http://127.0.0.1:5000/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: this.state.email, pwd: this.state.password }),
		})
			.then(response => response.json())
			.then(data => {
				console.log(data)
			})
			.catch(error => console.error(error))
	}

	render() {
		return (
			<header className='header'>
				<div className='header__position'>
					<h1 className='header__welcome-h1'>Hello Again!</h1>
					<p className='header__welcome-text'>Please enter your details</p>
				</div>
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
									<input type='password' className='form-account__input-account' placeholder='Repeat Password' />
								</div>
								<button type='submit' className='signin-btn'>
									Sign in
								</button>
								<p>
									Do you have accound?{' '}
									<span className='bottom-signup-link'>
										<Link to='/Register'>Log in</Link>
									</span>
								</p>
							</div>
						</div>
					</form>
				</main>
			</header>
		)
	}
}
