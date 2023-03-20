import React from 'react'
import '../scss/style.scss'

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<nav>
					<div className='nav'>
						<div className='nav__burgericon'></div>
					</div>
				</nav>
				<header>
					<div className='header'>
						<div className='header__position'>
							<h1 className='header__welcome-h1'>Learn postgres</h1>
							<p className='header__welcome-text'>
								Gain valuable knowledge of relational database management systems that will help you find a job in IT
							</p>
							<button className='header__welcome-btn'>get started</button>
						</div>
					</div>
				</header>
			</div>
		)
	}
}
