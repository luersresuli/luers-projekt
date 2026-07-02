import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Imazhi1 from './images/image1.jpg';
import Imazhi2 from './images/image2.jpg';
import Imazhi3 from './images/image3.jpg';
import Container from 'react-bootstrap/Container';

const NewCarousel = () => {
  return (
    <Container>
     <Carousel >
      <Carousel.Item>
        <img src={Imazhi1} style={{height:"500px", width:"100%"}} alt=""text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Imazhi2} style={{height:"500px", width:"100%"}} alt="" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Imazhi3} style={{height:"500px", width:"100%"}} alt="" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default NewCarousel