import React from "react";
import { Helmet } from "react-helmet-async";

function SEO({ title, description, name, type }) {
  console.log(name, type);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* Twitter tags */}
      <meta name="twitter:creator" content="Empowered Blockchain Firm"/>
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

export default SEO;
