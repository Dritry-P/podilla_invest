import './WhatWeDo.scss'
import { useState } from 'react';

const WhatWeDo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  let touchStartX = 0;
  let touchEndX = 0;
  let mouseDown = false;

  // Обробка свайпу на мобільних пристроях
  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  // Обробка свайпу мишкою
  const handleMouseDown = (e) => {
    mouseDown = true;
    touchStartX = e.screenX;
  };

  const handleMouseUp = (e) => {
    if (mouseDown) {
      touchEndX = e.screenX;
      handleSwipeGesture();
    }
    mouseDown = false; // Скидаємо стан миші
  };

  const handleMouseLeave = () => {
    mouseDown = false; // При виході миші з елемента
  };

  const handleSwipeGesture = () => {
    if (touchStartX - touchEndX > 50) {
      // Якщо свайп вліво
      nextSlide();
    }

    if (touchEndX - touchStartX > 50) {
      // Якщо свайп вправо
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div
      className="slider-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slider">
        <div className={`slide ${currentSlide === 0 ? 'active' : ''} ${currentSlide === 1 ? 'prev' : ''} ${currentSlide === 2 ? 'next' : ''}`}>
          <div className="slide-content" style={{ backgroundColor: 'linear-gradient(to right, #ff7e5f, #feb47b)' }}>
            <h2 className='slide__title' >Support Ukraine</h2>
            <p className='slide__subtitle'>Assisting various fields including workers, humanitarian needs, and education programs for school children.</p>
            <a className='slide__link' href="#">Learn More</a>
          </div>
        </div>

        <div className={`slide ${currentSlide === 1 ? 'active' : ''} ${currentSlide === 2 ? 'prev' : ''} ${currentSlide === 0 ? 'next' : ''}`}>
          <div className="slide-content" style={{ backgroundColor: 'linear-gradient(to right, #6a11cb, #2575fc)' }}>
            <h2 className='slide__title'>Development of Custom Big Data Solutions</h2>
            <p className='slide__subtitle'>Get a tailored Big Data solution that will transform the way you work with data and help you make informed decisions.</p>
            <a className='slide__link' href="#">Learn More</a>
          </div>
        </div>

        <div className={`slide ${currentSlide === 2 ? 'active' : ''} ${currentSlide === 0 ? 'prev' : ''} ${currentSlide === 1 ? 'next' : ''}`}>
          <div className="slide-content" style={{ backgroundColor: 'linear-gradient(to right, #11998e, #38ef7d)' }}>
            <h2 className='slide__title'>Custom Mobile Development</h2>
            <p className='slide__subtitle'>Go mobile to better interact with your target audience and unlock new revenue streams with hybrid mobile apps.</p>
            <a className='slide__link' href="#">Learn More</a>
          </div>
        </div>
      </div>

      <div className="controls">
        <button onClick={prevSlide} className="prev-button">&lt;</button>
        <button onClick={nextSlide} className="next-button">&gt;</button>
      </div>
    </div>
  );
};

export default WhatWeDo;

