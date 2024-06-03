import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3} sm={6} className="footer-col">
            <h4 className="footer-title">Vegefoods</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            <div className="footer-social">
              <Link to="#"><i className="fab fa-twitter" alt="Twitter"></i></Link>
              <Link to="#"><i className="fab fa-facebook-f" alt="Facebook"></i></Link>
              <Link to="#"><i className="fab fa-instagram" alt="Instagram"></i></Link>
            </div>
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h4 className="footer-title">Menu</h4>
            <ul className="footer-links">
              <li><Link to="#">Shop</Link></li>
              <li><Link to="#">About</Link></li>
              <li><Link to="#">Journal</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h4 className="footer-title">Help</h4>
            <ul className="footer-links">
              <li><Link to="#">Shipping Information</Link></li>
              <li><Link to="#">Returns & Exchange</Link></li>
              <li><Link to="#">Terms & Conditions</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">FAQs</Link></li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h4 className="footer-title">Have a Questions?</h4>
            <ul className="footer-contact">
              <li><i className="fas fa-map-marker-alt" alt="Map Marker"></i> 203 Fake St. Mountain View, San Francisco, California, USA</li>
              <li><i className="fas fa-phone-alt" alt="Phone"></i> +2 392 3929 210</li>
              <li><i className="fas fa-envelope" alt="Envelope"></i> info@yourdomain.com</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <p>&copy; 2024 All rights reserved | This template is made with <i className="fas fa-heart" alt="Heart"></i> by Colorlib</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
