import React, { useEffect, useState } from "react";
import "./Services.css";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;