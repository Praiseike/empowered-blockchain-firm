import React from 'react';
import './message.css';
function Alert({children,type,message}){
	const renderChildren = () => {
		return React.cloneElement(children);
	}
	return (
		<div className="message p-24">
			{children ? renderChildren() : message }
		</div>
	);
}

export default Alert;