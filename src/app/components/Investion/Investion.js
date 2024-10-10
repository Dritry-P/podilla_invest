import React from 'react';
import './_Investion.scss';

const InvestmentInfo = () => {
  return (
    <section className="investment-section">
      <div className="investment-container">
        {/* Ліва частина з планами */}
        <aside className="investment-plans">
          <h3>Виберіть план інвестицій</h3>
          <ul>
            <li><a href="#plan1">План 1</a></li>
            <li><a href="#plan2">План 2</a></li>
            <li><a href="#plan3">План 3</a></li>
            <li><a href="#plan4">План 4</a></li>
          </ul>
        </aside>

        {/* Права частина з інформацією */}
        <div className="investment-info">
          <h2>Інвестування в "Поділля-Інвест Сіті"</h2>
          <p>Компанія пропонує вигідні умови для інвестування в будівельні проекти...</p>

          <div className="investment-section__info">
            <h3>Чому варто інвестувати?</h3>
            <ul>
              <li><strong>Сталий ріст ринку:</strong> Ринок нерухомості продовжує зростати...</li>
              <li><strong>Постійний попит:</strong> Високий попит на сучасне житло...</li>
              <li><strong>Високий захист інвестицій:</strong> Усі угоди надійно захищені...</li>
              <li><strong>Швидка окупність:</strong> Інвестиції повертаються за 2-3 роки...</li>
            </ul>
          </div>

          <div className="investment-section__nuances">
            <h3>Нюанси інвестування</h3>
            <ul>
              <li><strong>Економічні ризики:</strong> Ціни на ринку можуть коливатись...</li>
              <li><strong>Інфляція:</strong> Зміна інфляції може впливати на прибутковість...</li>
              <li><strong>Тривалість проектів:</strong> Деякі проекти можуть зайняти більше часу...</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentInfo;
