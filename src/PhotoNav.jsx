import React from 'react'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap';
import burger from './images/burger.jpg';

const PhotoNav = () => {
  return (
      <Container className="navPhoto">
    <Row>
      <Col>
      <img src={burger} alt='burgerNavbar' style={{width:"100%", height:"800px",}}/>
      </Col>
    </Row>
    </Container>
  )
}

export default PhotoNav