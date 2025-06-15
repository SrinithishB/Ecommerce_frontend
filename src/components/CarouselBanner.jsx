import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { CarouselWrapper, Slide, Slides, DotWrapper, Dot } from '../styledcomponents/Carousel.styled';
// 1920×700 ideal size
const CarouselBanner = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const goToNext = () => {
    setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <CarouselWrapper {...handlers}>
      <Slides current={current}>
        {images.map((img, idx) => (
          <Slide key={idx} src={img} alt={`Slide ${idx}`} />
        ))}
      </Slides>

      <DotWrapper>
        {images.map((_, idx) => (
          <Dot key={idx} active={idx === current} onClick={() => goToSlide(idx)} />
        ))}
      </DotWrapper>
    </CarouselWrapper>
  );
};

export default CarouselBanner;
