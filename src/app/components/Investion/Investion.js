import React, { useState } from 'react';
import './_Investion.scss';

const InvestmentBlock = () => {
  const [selectedPlan, setSelectedPlan] = useState('medium'); // Вибраний інвестиційний план

  const investmentPlans = [
    {
      id: 'short',
      title: 'Короткостроковий',
      duration: '1 рік',
      minimum: '$5,000',
      roi: '10%',
      description: 'Підходить для тих, хто хоче отримати швидкий дохід.',
    },
    {
      id: 'medium',
      title: 'Середньостроковий',
      duration: '3 роки',
      minimum: '$10,000',
      roi: '15%',
      description: 'Оптимальний варіант для середньострокових інвестицій.',
    },
    {
      id: 'long',
      title: 'Довгостроковий',
      duration: '5 років',
      minimum: '$15,000',
      roi: '20%',
      description: 'Ідеально для тих, хто шукає стабільний довгостроковий дохід.',
    },
  ];

  return (
    <div className="investmentBlock">
      <h2>Інвестуйте з «Поділля-Інвест Сіті»</h2>
      <p>Ми пропонуємо вигідні інвестиційні плани для різних категорій інвесторів, з гарантією стабільного доходу та прозорими умовами.</p>

      <div className="plans">
        {investmentPlans.map((plan) => (
          <div
            key={plan.id}
            className={`plan ${plan.id === selectedPlan ? 'active' : ''}`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <h3>{plan.title}</h3>
            <p><strong>Тривалість:</strong> {plan.duration}</p>
            <p><strong>Мінімальна сума:</strong> {plan.minimum}</p>
            <p><strong>ROI:</strong> {plan.roi}</p>
            <p>{plan.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentBlock;
