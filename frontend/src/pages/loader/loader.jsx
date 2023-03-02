import React from 'react';
import './loader.css';
import loaderImage from '../../assets/images/spinner/blue-spinner.gif';

const Loader = ({timeout}) => {
	return (
		<div className="loader-container bg-white">
			<div className="loader">
				<img
					src={loaderImage}
					alt="spinning ring"
					className="loader-image"
				/>
			</div>
		</div>
	);
}

export default Loader