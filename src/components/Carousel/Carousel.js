import React, { useState, useEffect, useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Carousel.scss";

const Carousel = ({
  items,
  renderItem,
  itemsPerView = 1,
  showNavigation = true,
  showIndicators = true,
  className = "",
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  const maxSlides = Math.max(0, items.length - itemsPerView);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, itemsPerView]);

  const handlePrev = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => Math.max(0, prev - 1));
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleNext = () => {
    if (currentSlide < maxSlides && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => Math.min(maxSlides, prev + 1));
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  // Touch/swipe handlers
  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < maxSlides) {
      handleNext();
    } else if (isRightSwipe && currentSlide > 0) {
      handlePrev();
    }
  };

  const transformValue = -currentSlide * (100 / itemsPerView);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={`carousel ${className}`} {...props}>
      <div
        className="carousel__container"
        style={{ "--items-per-view": itemsPerView }}
      >
        <div
          className="carousel__viewport"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="carousel__track"
            style={{
              transform: `translateX(${transformValue}%)`,
              transition: isTransitioning
                ? "transform 0.3s ease-in-out"
                : "none",
            }}
          >
            {items.map((item, index) => (
              <div key={index} className="carousel__item">
                {renderItem(item, index)}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {showNavigation && maxSlides > 0 && (
          <>
            <button
              className={`carousel__nav-btn carousel__nav-btn--prev ${
                currentSlide === 0 ? "carousel__nav-btn--disabled" : ""
              }`}
              onClick={handlePrev}
              disabled={currentSlide === 0}
            >
              <MdChevronLeft size={20} />
            </button>

            <button
              className={`carousel__nav-btn carousel__nav-btn--next ${
                currentSlide >= maxSlides ? "carousel__nav-btn--disabled" : ""
              }`}
              onClick={handleNext}
              disabled={currentSlide >= maxSlides}
            >
              <MdChevronRight size={20} />
            </button>
          </>
        )}

        {/* Slide Indicators */}
        {showIndicators && maxSlides > 0 && (
          <div className="carousel__indicators">
            {Array.from({ length: maxSlides + 1 }, (_, index) => (
              <button
                key={index}
                className={`carousel__indicator ${
                  index === currentSlide ? "carousel__indicator--active" : ""
                }`}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsTransitioning(false), 300);
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
