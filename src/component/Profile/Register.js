import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function RegisterModal({ show, onHide }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform registration logic here
        // For example, you can access the form data using event.target.elements
        const username = event.target.elements.username.value;
        const province = event.target.elements.province.value;
        const city = event.target.elements.city.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        // Once registration logic is complete, you can close the modal
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name="username" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicProvince">
                        <Form.Label>Province</Form.Label>
                        <Form.Control type="text" placeholder="Enter province" name="province" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter city" name="city" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" required />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RegisterModal;
