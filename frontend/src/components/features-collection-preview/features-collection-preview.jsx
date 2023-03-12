import React from 'react';
import PropTypes from 'prop-types';
import FeaturesCollectionItem from '../features-collection-item/features-collection-item';
import './features-collection-preview.css';

function FeaturesCollectionPreview(features) {
 const list = [];
  features.features.forEach((item,index) => {
    list.push(<FeaturesCollectionItem key={index} feature={item}/>);
  })
  return (
    <>
      <div className="text-dark flex justify-center items-center flex-wrap flex-row">
        {list}
      </div>
    </>
  )
}

FeaturesCollectionPreview.propTypes = {
    features: PropTypes.arrayOf(PropTypes.object)
}
 
export default FeaturesCollectionPreview;