import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const FacebookSEO = ({ title, description, image }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta property="og:url" content="https://qawithpierre.pl" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
      </Helmet>
    </HelmetProvider>
  );
}

export default FacebookSEO;
