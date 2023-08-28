import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { reviews } from "../reviews";
import carouselStyles from "../styles/Carousel.module.css";

const Carousel = () => {

  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

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

  return (
    <div className={carouselStyles.carousel}>
      <div className={carouselStyles.embla} ref={emblaRef}>
        <div className={carouselStyles.embla__container}>
          {reviews.map((review) => (
            <div key={review.id} className={carouselStyles.slide}>
              <div className={carouselStyles.slideContent}>
                <div className={carouselStyles.googlecontainer}>
                <p className={carouselStyles.name}>{review.name} <img className={carouselStyles.google} src="google.png"/></p>
                </div>
                <p className={carouselStyles.date}>{review.date}</p>
                <img className={carouselStyles.rating} src={review.rating}/>
                <p className={carouselStyles.review}>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
