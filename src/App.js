import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Resetpassword from './components/Resetpassword'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
	return (
		<Router>
			<div className='App'>
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/Login' element={<Login />} />
						<Route path='/Register' element={<Register />} />
						<Route path='/Resetpassword' element={<Resetpassword />} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}
