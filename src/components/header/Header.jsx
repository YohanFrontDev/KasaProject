import './header.css'
import Logo from '../../assets/logo.png'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'



export default function Header() {
	return (
		<header className='header'>
			<Link  to='/'>
				<img src={Logo} alt="kasa, location d'appartements"  />         
            </Link>
			<Navbar />
		</header>
	)
}
