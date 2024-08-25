import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../FoodType.css";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };

  const handlePayment = () => {
    navigate('/payment-options');
  };

  return (
    <>
      <Navbar expand="lg" className="nav1-bg">
        <Container>
          <Navbar.Brand href="#home">YummyFood</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#service">Service</Nav.Link>
              <Nav.Link href="/about-us">AboutUs</Nav.Link>
            </Nav>
            <div className='btns'>
              <Button className='btnOn' onClick={handlePayment}>Order now</Button>
              <Button className='btnLO' onClick={handleLogout}>Logout</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header