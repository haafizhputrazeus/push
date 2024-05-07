import React from "react";
import { Container, Carousel } from "react-bootstrap";

function SlideKonten() {
    return (
        <Container>
            <h1 className="mt-5 mb-4">Slide Model</h1>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
                    <Carousel.Caption>
                        <h3>Baju Wanita</h3>
                        <p>Deskripsi singkat mengenai baju wanita.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Baju Pria</h3>
                        <p>Deskripsi singkat mengenai baju pria.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Baju Anak-anak</h3>
                        <p>Deskripsi singkat mengenai baju anak-anak.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default SlideKonten;
