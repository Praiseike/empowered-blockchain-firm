import React from "react";
import PropTypes from "prop-types";
import Headline from "../headline/headline";

function ZPattern({
  headline,
  title = "",
  content = "",
  imageSource = "",
  type = "content",
  variant = "",
  headlineColor,
  dPattern = false,
}) {
  const patternIsInverse = variant === "inverse" ? true : false;

  return (
    <section
      className="w-[85%] mx-auto my-[8rem] sm:md:grid sm:md:grid-cols-2 gap-x-14"
      role="article"
    >
      <div
        className={`content relative flex flex-col mt-5 z-50 ${
          patternIsInverse ? "order-1 sm:md:order-2" : ""
        }`}
      >
        {/* Display Pattern */}
        {dPattern && (
          <svg
            fill="currentColor"
            role="img"
            aria-hidden="true"
            className="absolute top-50 -left-1 w-10 h-6 -z-10"
          >
            <title>Diagonal A Dense</title>
            <pattern
              id="DiagonalADense-pattern-1"
              x="0"
              y="0"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <rect width="1" height="1" fill="currentColor"></rect>
              <rect x="2" y="2" width="1" height="1" fill="currentColor"></rect>
              <rect x="1" y="2" width="1" height="1" fill="currentColor"></rect>
              <rect x="1" y="3" width="1" height="1" fill="currentColor"></rect>
              <rect y="3" width="1" height="1" fill="currentColor"></rect>
              <rect x="3" width="1" height="1" fill="currentColor"></rect>
              <rect x="3" y="1" width="1" height="1" fill="currentColor"></rect>
              <rect x="2" y="1" width="1" height="1" fill="currentColor"></rect>
            </pattern>
            <rect
              width="100%"
              height="100%"
              fill="url(#DiagonalADense-pattern-1)"
            ></rect>
          </svg>
        )}

        {headline && <Headline title={headline} color={headlineColor} />}
        <h3 className="text-4xl mt-[.2rem] mb-5 text-blue-dark font-semibold capitalize">
          {title}
        </h3>
        <p className="leading-[1.65] text-[1.03rem] text-blue-900">{content}</p>
      </div>

      <figure
        className={`h-[19rem] rounded-lg overflow-hidden ${
          patternIsInverse ? "sm:md:order-1 order-2" : ""
        }`}
      >
        <img
          src={imageSource}
          alt={type}
          className="w-full h-full object-cover"
        />
      </figure>
    </section>
  );
}

ZPattern.propTypes = {
  headline: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageSorce: PropTypes.node,
  type: PropTypes.string.isRequired,
  variant: PropTypes.string,
  headlineColor: PropTypes.string,
  dPattern: PropTypes.bool,
};

export default ZPattern;
