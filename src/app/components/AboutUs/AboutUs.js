import { useState } from 'react';
import './_AboutUs_style.scss';

const AboutUs = () => {

  return (
    <>
      <section className="about">
        <div className="about__item">
          <div className="about__item-img">
            <p className="about__item-img-title">Про компанію</p>
          </div>
          <div className="about__item-info-holder">
            <p className="about__item-info">
              «Поділля-Інвест Сіті» — провідна будівельна компанія, заснована у місті Хмельницький. 
              Ми спеціалізуємось на створенні сучасних житлових комплексів, комерційних об'єктів та інфраструктурних рішень, 
              які відповідають найвищим стандартам якості та інновацій.
            </p>
          </div>
        </div>
        <div className="about__item">
          <div className="about__item-img">
            <p className="about__item-img-title">Історія компанії</p>
          </div>
          <div className="about__item-info-holder">
            <p className="about__item-info">
              Компанія «Поділля-Інвест Сіті» була заснована у 2005 році групою професіоналів з будівельної галузі. 
              Відтоді ми реалізували десятки проектів, які змінили обличчя Хмельницького. Наше завдання — створювати простори, 
              що поєднують комфорт, сучасні архітектурні рішення та безпеку. За роки існування ми зарекомендували себе 
              як надійного партнера і лідера на ринку нерухомості Поділля.
            </p>
          </div>
        </div>
        <div className="about__item">
          <div className="about__item-img">
            <p className="about__item-img-title">Нащі плани</p>
          </div>
          <div className="about__item-info-holder">
            <p className="about__item-info">
              Хмельницький — це місто з багатою історією та динамічним розвитком, а «Поділля-Інвест Сіті» відіграє 
              ключову роль у його оновленні, створюючи житлові комплекси, які поєднують традиції регіону з новітніми технологіями.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

