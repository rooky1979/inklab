import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import artCarouselStyles from "../styles/ArtCarousel.module.css";
import RecursiveTimeout from "./recursiveTimeout";

const AUTOPLAY_INTERVAL = 5000;

const ArtCarousel = ({ images, backgroundImage }) => {
  const mainpageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const autoplay = useCallback(() => {
    if (!embla) return;

    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = RecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  useEffect(() => {
    play();
  }, [play]);

  const scrollPrev = () => {
    if (embla) {
      embla.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (embla) {
      embla.scrollNext();
    }
  };

  return (
    <div className={artCarouselStyles.mainpage} style={mainpageStyle}>
      <div className={artCarouselStyles.bodycontainer}>
        {/* Left Arrow */}
        <button className={artCarouselStyles.arrowLeft} onClick={scrollPrev}>
          &lt;
        </button>
        <div className={artCarouselStyles.carousel}>
          <div className={artCarouselStyles.embla} ref={emblaRef}>
            <div className={artCarouselStyles.embla__container}>
              {images.map((image) => (
                <div key={image.id} className={artCarouselStyles.slide}>
                  <div className={artCarouselStyles.slideContent}>
                    <img className={artCarouselStyles.image} src={image} />
                    <div className={artCarouselStyles.dotcontainer}>
                      {scrollSnaps.map((_, idx) => (
                        <button
                          className={
                            idx === selectedIndex
                              ? artCarouselStyles.yellowdot
                              : artCarouselStyles.graydot
                          }
                          key={idx}
                          onClick={() => scrollTo(idx)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Arrow */}
        <button className={artCarouselStyles.arrowRight} onClick={scrollNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ArtCarousel;
