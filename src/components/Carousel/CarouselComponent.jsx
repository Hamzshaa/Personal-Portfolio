import { IoMagnet } from "react-icons/io5";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselComponent.css";

export default function CarouselComponent({ img }) {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img &&
          img?.length > 0 &&
          img?.map((imgItem) => (
            <div key={imgItem} className="Carouse__img-wrapper">
              <img src={imgItem} alt="carousel" className="carousel__img" />
            </div>
          ))}
      </Carousel>
      <div className="relative hero__img"></div>
    </div>
  );
}
