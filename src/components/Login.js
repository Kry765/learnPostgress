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
						<div className='nav__menu--logo'>
						{/* <Link to='/'></Link> */}
						</div>
						<div className='nav__burgericon'></div>
						<div className='nav__menu'>
							<Link to='/'>Home</Link>
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
								<p>Don't have an accound? <span className='bottom-signup-link'>
									<Link to="/Register">Sign up</Link>
									</span></p>
								</div>	
						</div>
					</form>
				</main>
			</div>
		)
	}
}
