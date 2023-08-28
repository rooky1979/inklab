import React, {useEffect} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import carouselStyles from "@/styles/Carousel.module.css"

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className={carouselStyles.embla} ref={emblaRef}>
      <div className={carouselStyles.embla__container}>
        <div className={carouselStyles.embla__slide}>Slide 1</div>
        <div className={carouselStyles.embla__slide}>Slide 2</div>
        <div className={carouselStyles.embla__slide}>Slide 3</div>
      </div>
    </div>
  );
};

export default Carousel;
