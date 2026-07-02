import React from 'react'
import NewChildCard from './NewChildCard';
import './NewParentCard.css'
import { Container, Row, Col } from 'react-bootstrap'
import uk from './images/uk.jpg';
import sp from './images/sp.jpg';
import tr from './images/tr.jpg';
import it from './images/it.jpg';
import jp from './images/jp.jpg';
import ind from './images/ind.jpg';

const NewParentCard = () => {
const informations = [
    {
        id: 1, 
        image: uk,
        place: "united kingdom",
        price: "$5,000"
    },
        {
        id: 2, 
        image: sp,
        place: "spain",
        price: "$4,000"
    },
        {
        id: 3, 
        image: tr,
        place: "turkey",
        price: "$2,000"
    },
        {
        id: 4, 
        image: it,
        place: "italy",
        price: "$3,000"
    },
        {
        id: 5, 
        image: jp,
        place: "japan",
        price: "$4,000"
    },
        {
        id: 6, 
        image: ind,
        place: "india",
        price: "$4,000"
    },
]
  return (
    <Container className='cont'>
        <Row>
            {informations.map((information)=>{
                return(
                    <Col className='rowcol' xs={12} md={6} lg={4}>
                      <NewChildCard {...information}/>
                    </Col>
                )
            })}
        </Row> 
    </Container>
  )
}

export default NewParentCard