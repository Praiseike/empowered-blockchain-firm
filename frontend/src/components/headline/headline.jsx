import React from "react";
import PropTypes from "prop-types";

function Headline({ title = "Headline", color }) {
  let colorVariant = `text-sm font-extrabold uppercase ${
    color ? color : "text-blue-dark"
  }`;

  return <h6 className={`${colorVariant}`}>{title}</h6>;
}

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Headline;
