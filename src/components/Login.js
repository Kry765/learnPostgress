import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/_login.scss'

export default class Login extends React.Component {
	render() {
		return (
			<div>
				<nav class='navbar navbar-expand-lg bg-body-tertiary'>
					<div class='container-fluid'>
						<a class='navbar-brand' href='#'>
							Navbar
						</a>
						<button
							class='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNavAltMarkup'
							aria-controls='navbarNavAltMarkup'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span class='navbar-toggler-icon'></span>
						</button>
						<div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
							<div class='navbar-nav'>
								<a class='nav-link active' aria-current='page' href='#'>
									Home
								</a>
								<a class='nav-link' href='#'>
									Features
								</a>
								<a class='nav-link' href='#'>
									Pricing
								</a>
								<a class='nav-link disabled'>Disabled</a>
							</div>
						</div>
					</div>
				</nav>
				<header className='header'>
					<div className='header__position'>
						<h1 className='header__welcome-h1'>Hello Again!</h1>
						<p className='header__welcome-text'>Please enter your details</p>
					</div>
				</header>
				<main>
					<form>
						<div>
							<div className='container'>
								<div className='form-account'>
									<input type='text' className='form-account__input-account' placeholder='Email' />
									<input type='password' className='form-account__input-account' placeholder='Password' />
									<p>
										<span className='form-account__forgot-password'>
											<Link to='/Resetpassword'>Forgot password</Link>
										</span>
									</p>
								</div>
								<button type='button' className='signin-btn'>
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
