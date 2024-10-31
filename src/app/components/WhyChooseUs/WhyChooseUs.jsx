import React from 'react';
import './_WhyChooseUs.scss';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '/img/blueprint.svg',
      title: 'Унікальні Проекти',
      description: 'Комплексна розробка проектів з урахуванням всіх особливостей об’єкта та місцевості.',
    },
    {
      icon: '/img/tower-crane.svg',
      title: 'Будівництво Заводів',
      description: 'Будуємо об’єкти будь-якого промислового призначення — від цехів до заводів.',
    },
    {
      icon: '/img/calendar.svg',
      title: 'Гарантія Якості',
      description: 'Використання якісних матеріалів та сучасних технологій гарантує якість.',
    },
    {
      icon: '/img/room-key.svg',
      title: 'Будівництво під ключ',
      description: 'Ми надаємо повний супровід від проекту до введення в експлуатацію.',
    },
  ];

  return (
    <div className="whyChooseUs">
      <h2>Особливості роботи з нами</h2>
      <p>Завдяки багаторічному досвіду та сучасним технологіям будівництва ми пропонуємо високоякісні рішення для кожного проекту.</p>

      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

