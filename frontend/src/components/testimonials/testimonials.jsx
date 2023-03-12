import { useState, useEffect } from 'react';
import './testimonials.css';



function SlideShow(){
	const colors = [ 'red','green','blue'];
	const [ index, setIndex ] = useState();

	useEffect(() => {
		setTimeout(() =>{
			setIndex((prevIndex) => prevIndex === colors.length - 1 ? 0 : prevIndex + 1)
		},2500);
	},[index,colors.length]);

	return(
		<div className="slideShow">
			<div 
				style={ { transform: `translateX(${-index * 100}%)`}}
				className="slideShowSlider">
			{
				colors.map((color,index) => {
					return (
						<div key={index} style={{backgroundColor: color}} className="slide">
							
						</div>
					)
				})
			}
			</div>
			<div className="slideShowDots">
				{
					colors.map((_,idx) => {
						return	<div key={idx} onClick={() => {setIndex(idx)}} className="slideShowDot"></div>
					})
				}
			</div>
		</div>
	);

}

function Testimonials(){

	return (
		<section>
			<SlideShow/>
		</section>
	)
}

export default Testimonials;