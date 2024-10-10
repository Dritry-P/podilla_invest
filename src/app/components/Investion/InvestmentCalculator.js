// components/InvestmentCalculator.js
import React, { useState } from 'react';
import './_InvestmentCalculator.scss';

const InvestmentCalculator = () => {
  const [amount, setAmount] = useState(1000);
  const [interestRate, setInterestRate] = useState(10);

  const calculateProfit = () => {
    return (amount * interestRate / 100).toFixed(2);
  };

  const handleAmountChange = (e) => {
    const newAmount = parseFloat(e.target.value);
    setAmount(newAmount);
    
    if (newAmount >= 10000) {
      setInterestRate(20);
    } else if (newAmount >= 5000) {
      setInterestRate(15);
    } else {
      setInterestRate(10);
    }
  };

  return (
    <section className="investment-calculator">
      <h2 className="investment-calculator__title">Калькулятор Інвестицій</h2>
      <div className="investment-calculator__form">
        <label>Сума інвестицій ($):</label>
        <input 
          type="number" 
          value={amount} 
          min="1000"
          onChange={handleAmountChange} 
        />
      </div>
      <div className="investment-calculator__result">
        <p>Прогнозований прибуток: ${calculateProfit()}</p>
        <p>Ставка: {interestRate}%</p>
      </div>
    </section>
  );
};

export default InvestmentCalculator;
