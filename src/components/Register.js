import React from 'react'
import '../scss/_register.scss'
import axios from 'axios'
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
		this.setState({ setEmail: event.target.value })
	}

	handlePassword = event => {
		this.setState({ setPassword: event.target.value })
	}
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')

	handleSubmit = event => {
		const email = this.state.setEmail
		const password = this.state.setPassword

		event.preventDefault()
		axios
			.post('/submit', { email, password })
			.then(response => console.log(response))
			.catch(error => console.log(error))
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
