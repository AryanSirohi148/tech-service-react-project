import React from 'react';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <p>{description}</p>
      <button>Read More</button>
    </div>
  );
};

export default ServiceCard;
