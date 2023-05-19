import React, { useCallback, useEffect, useState } from 'react';

const HeroCarousel = (props) => {
  const { images } = props;
  const [key, setKey] = useState(0);
  const [selected, setSelected] = useState(images[key]);
  const timeout = 5000;

  const goForward = useCallback(() => {
    if (key === images.length - 1) {
      setKey(0);
    } else {
      setKey(key + 1);
    }
  }, [key, images.length]);

  const goBack = useCallback(() => {
    if (key === 0) {
      setKey(images.length - 1);
    } else {
      setKey(key - 1);
    }
  }, [key, images.length]);

  useEffect(() => {
    setSelected(images[key]);
  }, [key, images]);

  useEffect(() => {
    const timer = setTimeout(() => {
      goForward();
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [goForward, timeout]);

  return (
    <div className="carouselContainer">
      <img src={selected} className="carouselImage" />
    </div>
  );
};

export default HeroCarousel;
