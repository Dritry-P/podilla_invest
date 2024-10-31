import React from 'react';
import './_Services.scss';

const Services = () => {
  const services = [
    { id: '01', title: 'Розробка проєктної та робочої документації' },
    { id: '02', title: 'Послуги генерального підряду' },
    { id: '03', title: 'Геодезичні роботи' },
    { id: '04', title: 'Земляні роботи' },
    { id: '05', title: 'Фасадні роботи' },
    { id: '06', title: 'Монолітні роботи' },
    { id: '07', title: 'Монтаж інженерних мереж та систем' },
    { id: '08', title: 'Благоустрій території' },
  ];

  return (
    <div className="services">
        <div className="services__title-holder">
            <div className="services__title">Послуги</div>
        </div>
      {services.map((service) => (
        <div key={service.id} className="service-item">
          <span className="number">{service.id}</span>
          <span className="description">{service.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Services;
