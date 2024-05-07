import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Katalog() {
    return (
        <Container>
            <h2>Katalog</h2>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Baju Wanita</Card.Title>
                            <Card.Text>Deskripsi singkat mengenai baju wanita.</Card.Text>
                            <Button variant="primary">Lihat Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Baju Pria</Card.Title>
                            <Card.Text>Deskripsi singkat mengenai baju pria.</Card.Text>
                            <Button variant="primary">Lihat Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Baju Anak-anak</Card.Title>
                            <Card.Text>Deskripsi singkat mengenai baju anak-anak.</Card.Text>
                            <Button variant="primary">Lihat Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Katalog;
