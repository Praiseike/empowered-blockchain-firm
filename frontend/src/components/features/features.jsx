import React from "react";
import PropTypes from 'prop-types';
import FeaturesCollectionPreview from '../features-collection-preview/features-collection-preview';

function Features({ title, features }) {
  return (
    // <div className="bg-stone-800 py-16 px-10 mt-8 text-white">
    <div className="py-16 px-10 mt-8 text-dark">
      <h2 className="text-white">{title}</h2>
      {/* Features Collection */}
      <FeaturesCollectionPreview features={features} />
    </div>
  );
}

Features.propTypes = {
  title: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.object) 
}

export default Features;
