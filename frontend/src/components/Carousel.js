import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/building1.jpg';
import img2 from '../images/building2.jpg';
import img3 from '../images/room1.jpg';
import img4 from '../images/room2.jpg';

export default function App() {
return (
	<div style={{ display: 'block', width: 1200, padding: 50,verticalAlign: 'center' }}>
	<h4>React-Bootstrap Carousel Component</h4>
	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src={img1}
			alt="compartment One"
		/>
		<Carousel.Caption>
			<h3>OBEROI MANSION</h3>
			<p>5 STRAR</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src={img2}
			alt="compartment Two"
		/>
		<Carousel.Caption>
			<h3>BAREL HILLS</h3>
			<p>5 STAR</p>
		</Carousel.Caption>
		</Carousel.Item>
        <Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src={img3}
			alt="luxurious rooms "
		/>
		<Carousel.Caption>
			<h3>LIVING ROOM</h3>
			<p>5 STAR ROOMS</p>
		</Carousel.Caption>
		</Carousel.Item>
        <Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src={img4}
			alt="luxurious rooms"
		/>
		<Carousel.Caption>
			<h3>LIVING ROOM</h3>
			<p>5 STAR ROOMS</p>
		</Carousel.Caption>
		</Carousel.Item>
        
	</Carousel>
	</div>
);
}
