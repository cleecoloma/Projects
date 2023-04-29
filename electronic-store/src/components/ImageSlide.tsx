import Carousel from "react-bootstrap/Carousel";

function ImageSlide(props : string) {
  return (
    <Carousel interval={null} variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imgUrl + "1.jpeg"}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imgUrl + "2.jpeg"}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imgUrl + "3.jpeg"}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlide;
