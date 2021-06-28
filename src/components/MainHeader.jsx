import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

function MainHeader() {
  return (
    <div className="header1" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/banner.png'})`
    }}>
      <Row className="header-row" >
        <Col xs={1} md={2}>
        </Col>
        <Col xs={5} md={6}>
          <Image src={process.env.PUBLIC_URL + '/foodLove.png'} className="logo-main" />
        </Col>
        <Col xs={6} md={4} className="header-icon">
          <FontAwesomeIcon className="header-icon-icon" icon={faFacebook} size="lg" color="#505050" pull="left" />
          <FontAwesomeIcon className="header-icon-icon" icon={faInstagram} size="lg" color="#505050" pull="left" />
          <FontAwesomeIcon className="header-icon-icon" icon={faLinkedin} size="lg" color="#505050" pull="left" />
          <FontAwesomeIcon className="header-icon-icon" icon={faTwitterSquare} size="lg" color="#505050" pull="left" />
        </Col>
      </Row>
    </div>
  )
}

export default MainHeader
