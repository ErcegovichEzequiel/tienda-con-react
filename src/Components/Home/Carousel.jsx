import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>

        <img
          className="d-block w-100"
          src="/img/Carrusel/image1.jpg"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>

        <img
          className="d-block w-100"
          src="/img/Carrusel/image2.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>

        <img
          className="d-block w-100"
          src="/img/Carrusel/image3.jpg"
          alt="Third slide"
        />

      </Carousel.Item>

      <Carousel.Item>
        
        <img
          className="d-block w-100"
          src="/img/Carrusel/image4.jpg"
          alt="Third slide"
        />

      </Carousel.Item>

    </Carousel>
  );
}


export default Carrusel;









