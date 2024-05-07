import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image } from "react-bootstrap";

function PhotoGallery() {
    return (
        <Container>
            <h2>Photo Gallery</h2>
            <div className="d-flex flex-wrap justify-content-around">
                <a href="https://via.placeholder.com/400x300" target="_blank" rel="noopener noreferrer" className="m-2">
                    <Image src="https://via.placeholder.com/400x300" alt="First photo" rounded />
                    <p>nama kretor</p>
                </a>
                <a href="https://via.placeholder.com/400x300" target="_blank" rel="noopener noreferrer" className="m-2">
                    <Image src="https://via.placeholder.com/400x300" alt="First photo" rounded />
                    <p>nama kretor</p>
                </a>
                <a href="https://via.placeholder.com/400x300" target="_blank" rel="noopener noreferrer" className="m-2">
                    <Image src="https://via.placeholder.com/400x300" alt="First photo" rounded />
                    <p>nama kretor</p>
                </a>
                <a href="https://via.placeholder.com/400x300" target="_blank" rel="noopener noreferrer" className="m-2">
                    <Image src="https://via.placeholder.com/400x300" alt="First photo" rounded />
                    <p>nama kretor</p>
                </a>
                <a href="https://via.placeholder.com/400x300" target="_blank" rel="noopener noreferrer" className="m-2">
                    <Image src="https://via.placeholder.com/400x300" alt="First photo" rounded />
                    <p>nama kretor</p>
                </a>
                <a href="https://via.placeholder.com/400x300" target="_blank" rel="noopener noreferrer" className="m-2">
                    <Image src="https://via.placeholder.com/400x300" alt="First photo" rounded />
                    <p>nama kretor</p>
                </a>
                <a href="https://via.placeholder.com/400x300" target="_blank" rel="noopener noreferrer" className="m-2">
                    <Image src="https://via.placeholder.com/400x300" alt="First photo" rounded />
                    <p>nama kretor</p>
                </a>
                <a href="https://via.placeholder.com/400x300" target="_blank" rel="noopener noreferrer" className="m-2">
                    <Image src="https://via.placeholder.com/400x300" alt="First photo" rounded />
                    <p>nama kretor</p>
                </a>
                <a href="https://via.placeholder.com/400x300" target="_blank" rel="noopener noreferrer" className="m-2">
                    <Image src="https://via.placeholder.com/400x300" alt="First photo" rounded />
                    <p>nama kretor</p>
                </a>
                {/* Add more anchor tags with Image components for additional photos */}
            </div>
        </Container>
    );
}

export default PhotoGallery;
