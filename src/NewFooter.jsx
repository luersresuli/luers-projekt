import React from 'react';
import './NewFooter.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Facebook from './images/logos/facebook.svg';
import Instagram from './images/logos/instagram.svg';
import Youtube from './images/logos/youtube.svg';
import Tiktok from './images/logos/tiktok.svg';

const NewFooter = () => {
  return (
    <footer className="footer"> 
        <Container>
            <Row>
                <Col>
                    <div className="footer-headings">
                        <h4>Rreth nesh</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi officia, nihil obcaecati eveniet hic nemo earum id excepturi natus perspiciatis, non facere maxime tenetur consequatur aut ducimus nulla amet?</p>
                    <p>Per cdo pyetje: <a href="mailto:contact@faqjaime.com">contact@faqjaime.com</a></p>
                </Col>
                <Col>
                    <ListGroup>
                    <div className="footer-headings">
                        <h4>Programet</h4>
                    </div>
                        <ListGroup.Item className='programs'>Sociologji</ListGroup.Item>
                        <ListGroup.Item className='programs'>Mekanizma</ListGroup.Item>
                        <ListGroup.Item className='programs'>Interaktivitet</ListGroup.Item>
                        <ListGroup.Item className='programs'>Zgjedhje</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <div className="footer-headings">
                        <h4>Informohu me teper</h4>
                    </div> 
                    <p>Regjistrohuni në buletinin tonë dhe merrni lajmet më të fundit në lidhje me programet tona</p>
                    <Form>
                        <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="emailijuaj@domain.com"/>
                        </Form.Group>
                    </Form>
                    <div>
                        <button type="submit" className="button">Regjistrohu</button>
                    </div>
                </Col>
            </Row>
            <hr></hr>
            <Row className="footer-bottom">
                <Col>
                    <p>&copy; Faqja jone. All rights reserve.</p>
                </Col>
                <Col>
                    <ListGroup horizontal>
                        <ListGroup.Item>
                            <a><img src={Facebook}></img></a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a><img src={Instagram}></img></a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a><img src={Youtube}></img></a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a><img src={Tiktok}></img></a>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default NewFooter