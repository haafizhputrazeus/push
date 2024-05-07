import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container, Button, Row, Col } from "react-bootstrap"; // Import Container, Button, Row, and Col from react-bootstrap
import UploadModal from "../Uplod/UpKonten"; // Import UploadModal component

function App() {
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    // Function to handle opening modal
    const handleOpenModal = () => {
        setShowModal(true);
    };

    // Function to handle closing modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container style={{ padding: "20px" }}>
            <Row className="justify-content-between align-items-center">
                <Col className="d-flex justify-content-end">
                    <Button variant="outline-dark" onClick={handleOpenModal}>
                        Upload
                    </Button>
                </Col>
            </Row>
            {/* Render the UploadModal component and pass required props */}
            <UploadModal show={showModal} handleClose={handleCloseModal} />
        </Container>
    );
}

export default App;
