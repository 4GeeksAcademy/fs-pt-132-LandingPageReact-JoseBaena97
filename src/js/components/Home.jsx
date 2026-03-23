import React from "react";

//include images into your bundle
import Navbar from './Nabvar';
import Jumbo from './Jumbotron';
import Card from './Card';
import Footer from "./Footer";

//create your first component
const Home = () => {
	const GalleryData = [
		{
			url: 'https://picsum.photos/id/289/200/300',
			title: 'Title',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur distinctio, expedita odit optio, voluptas officiis incidunt ex quod quo corrupti voluptatem in recusandae dolorem aut officia quisquam nisi.Incidunt, obcaecati.'
		},

		{
			url: 'https://picsum.photos/id/257/200/300',
			title: 'Title',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur distinctio, expedita odit optio, voluptas officiis incidunt ex quod quo corrupti voluptatem in recusandae dolorem aut officia quisquam nisi.Incidunt, obcaecati.'
		},
		{
			url: 'https://picsum.photos/id/90/200/300',
			title: 'Title',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur distinctio, expedita odit optio, voluptas officiis incidunt ex quod quo corrupti voluptatem in recusandae dolorem aut officia quisquam nisi.Incidunt, obcaecati.'
		},
		{
			url: 'https://picsum.photos/id/56/200/300',
			title: 'Title',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur distinctio, expedita odit optio, voluptas officiis incidunt ex quod quo corrupti voluptatem in recusandae dolorem aut officia quisquam nisi.Incidunt, obcaecati.'
		}
	];
	return (
		<div>
			<Navbar />
			<div className='container py-4'>
				<Jumbo />
				<div className='row g-4'> 
					{GalleryData.map((el, i) => (
						<div key={i} className="col-12 col-md-6 col-lg-3">
							<Card url={el.url} title={el.title} description={el.description} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;