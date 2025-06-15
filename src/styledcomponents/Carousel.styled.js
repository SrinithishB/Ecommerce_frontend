import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 60vw; /* Responsive height */
  max-height: 400px;

  @media (max-width: 768px) {
    height: 50vw;
  }

  @media (max-width: 480px) {
    height: 45vw;
  }
`;

export const Slides = styled.div`
  display: flex;
  transform: translateX(${props => `-${props.current * 100}%`});
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

export const Slide = styled.img`
  width: 100%;
  flex-shrink: 0;
  object-fit: cover;
  objectPosition: 'center';
`;

export const DotWrapper = styled.div`
  position: absolute;
  bottom: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => (props.active ? '#fff' : '#bbb')};
  cursor: pointer;
  transition: background 0.3s ease;

  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
`;
