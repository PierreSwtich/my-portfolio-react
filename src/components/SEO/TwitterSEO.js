import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const TwitterSEO = ({ title, description, image, card, creator }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta name="twitter:card" content={card} />
        <meta name="twitter:creator" content={creator} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Helmet>
    </HelmetProvider>
  );
}

export default TwitterSEO;
