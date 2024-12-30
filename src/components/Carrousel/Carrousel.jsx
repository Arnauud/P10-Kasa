import React, { useState } from 'react';
import rightArrow from '../../assets/rightArrow.svg';
import leftArrow from '../../assets/leftarrow.svg';
function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="Gallery">
      <img
        className="gallery-image"
        src={pictures[currentIndex]}
        alt={`Gallery ${currentIndex + 1}`}
      />
      {pictures.length > 1 && (
        <>
          <div className="gallery-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
          <button className="prev-arrow" onClick={handlePrev}>
            <img src={leftArrow} alt="Previous" />
          </button>
          <button className="next-arrow" onClick={handleNext}>
            <img src={rightArrow} alt="Next" />
          </button>
        </>
      )}
    </div>
  );
}

export default Carrousel;