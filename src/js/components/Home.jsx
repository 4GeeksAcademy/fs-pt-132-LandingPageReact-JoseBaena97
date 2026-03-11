import React from "react";

//include images into your bundle
import Navbar from './Nabvar';
import Jumbo from './Jumbotron';
import Card from './Card';

//create your first component
const Home = () => {
	return (
		<div>

			<Navbar />
			<Jumbo />

			<div className='container'>
				<div className='row'>
					<div className='col-3'>

						<Card />
					</div>
					<div className='col-3'>

						<Card />
					</div>
					<div className='col-3'>

						<Card />
					</div>
					<div className='col-3'>

						<Card />
					</div>

				</div>
			</div>
		</div>
	);
};

export default Home;