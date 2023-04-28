import './home.css'
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'
import Header from './../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function Home() {
	return (
		<div className='home'>
			<Header/>
			<Banner />
			<Gallery />
			<Footer/>
		</div>
	)
}
