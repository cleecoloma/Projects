import Carousel from "react-bootstrap/Carousel";

function ImageSlide(imgUrl : string) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgUrl} + "1.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlide;
