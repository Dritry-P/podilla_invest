import React from 'react';
import './_Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-info">
          <h2>Поділля-Інвест Сіті</h2>
          <p>Будівельна компанія, яка надає повний спектр послуг з будівництва та реконструкції.</p>
          <p>Адреса: м. Хмельницький, вул. Прикладна, 10</p>
          <p>Телефон: +380 (67) 123-45-67</p>
          <p>Email: info@podilla-invest.ua</p>
        </div>
        <div className="map">
          <h3>Наше розташування</h3>
          <iframe
            title="Podilla Invest Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.0932992062045!2d26.98017751569022!3d49.42163267934637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4732078ae870b1ab%3A0x5e5f13e6c8ea8b6b!2sKhmelnytskyi%2C%20Khmelnytskyi%20Oblast%2C%20Ukraine%2C%2030030!5e0!3m2!1sen!2sua!4v1634898254134!5m2!1sen!2sua"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="social-media">
          <h3>Ми в соціальних мережах</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Поділля-Інвест Сіті. Всі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
