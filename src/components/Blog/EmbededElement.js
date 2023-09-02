import React from 'react';

function EmbeddedCard({url}) {
  const embeddedUrl = url;

  return (
    <div className="embedded-card">
      <iframe
        src={embeddedUrl}
        title="Embedded Content"
        width="100%"
        height="900px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default EmbeddedCard;
