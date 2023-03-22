import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/_style.scss'
import '../scss/_login.scss'

export default class Login extends React.Component {
	render() {
		return (
			<div>
				<nav>
					<div className='nav'>
						<div className='nav__menu--logo'></div>
						<div className='nav__burgericon'></div>
						<div className='nav__menu'>About me</div>
						<div className='nav__menu'>Contact</div>
						<div className='nav__menu'>
							<Link to='Login'>Log in</Link>
						</div>
						<div className='nav__menu--register-btn'>
							<Link to='/Register'>Sing up</Link>
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
						<div className='test'>
							<div className='form-account'>
								<input type='text' className='form-account__input-account' placeholder='Email' />
								<input type='password' className='form-account__input-account' placeholder='Password' />
								<p className='left-position'>Forgot password</p>
								<button type='button' className='signin-btn'>
									Sign in
								</button>
								<p>Don't have an accound? Sign up</p>
							</div>
						</div>
					</form>
				</main>
			</div>
		)
	}
}
