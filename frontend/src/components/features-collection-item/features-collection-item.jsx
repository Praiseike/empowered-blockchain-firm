import React from 'react';
// import PropTypes from 'prop-types';
import './features-collection-item.css';

function FeaturesCollectionItem({feature}) {

  const {icon,title,content} = feature;
  return (
    <div className="feature-container">
      <div className="feature-header">
        <div className="feature-image text-blue-800">
          {React.createElement(icon)} 
        </div>
        <h4><strong>{title}</strong></h4>
      </div>
      <div className="feature-body">
        <p className="feature-content">{content}</p>
      </div>
    </div>
  )
}

// FeaturesCollectionItem.propTypes = {
    // icon: PropTypes.node.isRequired,
    // title: PropTypes.string.isRequired,
    // content: PropTypes.string.isRequired
// }

export default FeaturesCollectionItem
