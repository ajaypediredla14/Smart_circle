import React from 'react';
import './Home.css';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import code from './code.jpg';

const Home = () =>{
	return (
		<div className="pt_70 bg">
			<img
		      height="100%"
		      src= {code} 
		      alt="backgroud_loading"
		      width="100%" 
		      />
		</div>
	);	
};


export default Home;