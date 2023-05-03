import './announces.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/data'
import Header from "../../components/header/Header";
import Slider from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Dropdown from '../../components/dropdown/Dropdown';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';
import NotFound from '../notFound/NotFound';


export default function Announces() {

	const [imageSlider, setImageSlider] = useState([]);

	const idAnnounces = useParams('id').id;
	const dataCurrentAnnounces = datas.filter(data => data.id === idAnnounces);
	
	useEffect(() => {
		const dataCurrentAnnounces = datas.filter(data => data.id === idAnnounces);
		setImageSlider(dataCurrentAnnounces[0].pictures);
	}, [idAnnounces]);

	const name = dataCurrentAnnounces[0].host.name.split(' ');
	const rating = dataCurrentAnnounces[0].rating;
	const description = dataCurrentAnnounces[0].description;
	const equipments = dataCurrentAnnounces[0].equipments;

	if (!name) return <NotFound />;

	return (
		<>
			<Header />
			<Slider imageSlider={imageSlider} />
			<main className="announce">
				<div className="announce_content">
					<div className="announce_content_infos">
						<h1>{dataCurrentAnnounces[0].title}</h1>
						<p>{dataCurrentAnnounces[0].location}</p>
						<div className='announce_content_infos_button'>
							{dataCurrentAnnounces[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="announce_content_host">
						<div className='announce_content_host_profile'>
							<div className='announce_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAnnounces[0].host.picture} alt="host of this announce" />
						</div>

						<div className="announce_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="announce_dropdown">
					<div className="announce_dropdown_item">
						<Dropdown title={'Description'} content={description} />
					</div>
					<div className="announce_dropdown_item">
						<Dropdown title={'Équipements'} content={equipments} />
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
