import React from 'react'
import AboutCateringChildren from './AboutCateringChildren'
import { Container, Row, Col} from 'react-bootstrap'
import cake from './images/cake.jpg'


const AboutCateringParent = () => {
  const infos=[
    {
      titull: "About Catering",
      tradition: "Tradition since 1889",
      pershkrimi: "The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.",
      extra: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }
  ]
  return (
    <>
    <Container className='d-flex'>
      <Container >
        <img src={cake} alt='cakephoto' style={{ width:"600px",height:"400px",}}/>
      </Container>

    <Container>
      <Row className='text-center'>
        {infos.map((info,index)=>{
          return(
            <Col key={index}>
              <AboutCateringChildren {...info}/>
            </Col>
          )
        })}
      </Row>
    </Container>
    </Container>
    </>
  )
}

export default AboutCateringParent