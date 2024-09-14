
import { Carousel } from "react-responsive-carousel";
import { img } from './img/data'; // Ensure this path is correct
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS for the carousel
import styles from './carousel.module.css'; // Use 'styles' instead of 'classes'

function CarouselEffect() {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showIndicators={false} showThumbs={false}>
        {img.map((imageItemLink, index) => (
          <img
            key={index} // Ensure this is unique; consider using a unique ID if available
            src={imageItemLink}
            alt={`Carousel image ${index}`} // Ensure alt text is descriptive and relevant
          />
        ))}
      </Carousel>
      <div className={styles.hero__img}></div>{" "}
      {/* Ensure this class is defined in your CSS module */}
    </div>
  );
}

export default CarouselEffect;
