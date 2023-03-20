import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
	return (
		<Router>
			<div className='App'>
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</div>
			</div>
		</Router>
		// <div>
		// 	<Home />
		// </div>
	)
}
