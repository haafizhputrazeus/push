import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer className="bg-dark text-light py-3">
            <Container>
                <Row>
                    <Col sm={6}>
                        <p>&copy; 2024 Your Company</p>
                    </Col>
                    <Col sm={6} className="text-right">
                        <p>Contact Us: contact@example.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
