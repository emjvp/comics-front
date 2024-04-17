import React from 'react'
import Button from 'react-bootstrap/Button';
import { Col, Container, Form, Row } from 'react-bootstrap';

import Navbar from 'react-bootstrap/Navbar';

import Logo from '../logo.png';

const CustomNavBar = () => {

  const logoStyle =  {
    width: '60px',
    height: 'auto'
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Brand href="#home">Comics 
        <img src={Logo} style={logoStyle} 
          alt='This is the logo' />
        </Navbar.Brand>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Buscar"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Buscar</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  )
}

export default CustomNavBar
