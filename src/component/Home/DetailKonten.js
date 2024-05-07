import { Container, Image } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DetailKonten() {
    return (
        <Container style={{ padding: "20px" }}>
            <Image src="https://via.placeholder.com/800x400" fluid />
            <h1 style={{ marginTop: "20px" }}>Title</h1>
            <p style={{ marginTop: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt libero. Nullam nec nunc sit amet nisi aliquam fermentum. Ut ultricies, justo non tincidunt posuere, sapien libero ultricies libero, ac tincidunt
                libero justo et odio. Nam nec nunc sit amet nisi aliquam fermentum. Ut ultricies, justo non tincidunt posuere, sapien libero ultricies libero, ac tincidunt libero justo et odio.
            </p>
        </Container>
    );
}
