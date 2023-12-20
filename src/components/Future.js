import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from '../assets/images/Group 61.png'
import Image2 from '../assets/images/Group 62.png'
import Image3 from '../assets/images/Group 63.png'
import Image4 from '../assets/images/Group 64.png'
import Image5 from '../assets/images/Group 65.png'
import Image6 from '../assets/images/Group 66.png'

const Future = () => {
  return (
    <div>
      <Container fluid style={{background:"black"}}>
      <Row>
      <Col md={12} sm={12} className="text-center">
          <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '5vw' ,fontWeight: 'bold' }}>
          The Future of Web3 NoCode  

          </p>
        </Col>
        <Col md={12} sm={12} className="text-center">
          <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '2vw'}}>
          Web3Makr allows you to incorporate top ranked blockchain platforms 
          </p>
        </Col>
        
        <Col md={12} sm={12} className="text-center">
          <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '2vw'}}>
          into your work through the drag and drop feature.
          </p>
        </Col> 
      </Row>
      <Row>
        <Col md={3} sm={12}>
        <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '4vw'}}>
        Multi-chain
          </p>
          <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '4vw',marginTop:"10vh"}}>
          Dashboard
          </p>
          <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '4vw',marginTop:"10vh"}}>
        Tool
          </p>
        </Col>
        <Col md={3} sm={12}>
        <img src={Image1} alt='' className="img-fluid" />
        </Col>
        <Col md={3} sm={12}>
        <img src={Image2} alt='' className="img-fluid" />
        </Col>
        <Col md={3} sm={12}>
        <img src={Image3} alt='' className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={12}>
        </Col>
        <Col md={3} sm={12}>
        <img src={Image4} alt='' className="img-fluid" />
        </Col>
        <Col md={3} sm={12}>
        <img src={Image5} alt='' className="img-fluid" />
        </Col>
        <Col md={3} sm={12}>
        <img src={Image6} alt='' className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={12}>

        </Col>
        <Col md={3} sm={12}>

        </Col>
        <Col md={3} sm={12}>

        </Col>
        <Col md={3} sm={12}>

        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Future
