import React from 'react'
import MenuChild from './MenuChild'
import dish from './images/dish.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import './MenuChild.css'

const MenuParent = () => {
    const infos = [
        {
            artikulli:"Bread Basket",
            pershkrimi:"Assortment of fresh baked fruit breads and muffins 5.50"
        },
        {
            artikulli:"Honey Almond Granola with Fruits",
            pershkrimi:"Natural cereal of honey toasted oats, raisins, almonds and dates 7.00"
        },
        {
            artikulli:"Belgian Waffle",
            pershkrimi:"Vanilla flavored batter with malted flour 7.50"
        },
        {
            artikulli:"Scrambled eggs",
            pershkrimi:"Scrambled eggs, roasted red pepper and garlic, with green onions 7.50"
        },
        {
            artikulli:"Blueberry Pancakes",
            pershkrimi:"With syrup, butter and lots of berries 8.50"
        },
        
    ]
  return (
    <Container className='d-flex' fluid>
        <Container>
            <Row className='d-flex flex-column' style={{marginLeft:"50px"}}>
                <h1 className='ourMenu'>Our Menu</h1>
                {infos.map((info, index)=>{
                    return(
                        <Col key={index}>
                            <MenuChild {...info} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
        <Container>
                <img src={dish} alt='dish' style={{marginLeft:"100px", width:"400px",height:"600px",}}/>
        </Container>
    </Container>
  )
}

export default MenuParent