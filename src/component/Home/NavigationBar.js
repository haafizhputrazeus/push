import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../../style/HomePage.css";
import logo from "../../image/logo.png";
import LoginModal from "../Profile/Login";
import RegisterModal from "../Profile/Register";
import Konten from "./Konten";

function CustomNavbar() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const handleLoginClick = () => {
        setShowLoginModal(true);
    };

    const handleRegisterClick = () => {
        setShowRegisterModal(true);
    };

    const handleLoginModalClose = () => {
        setShowLoginModal(false);
    };

    const handleRegisterModalClose = () => {
        setShowRegisterModal(false);
    };

    return (
        <Navbar variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="Logo" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/katalog" className="my-font">
                        Katalog
                    </Nav.Link>
                    <Nav.Link href="/konten" className="my-font">
                        ArtWork
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="dark" className="mx-2" onClick={handleLoginClick}>
                        Login
                    </Button>
                    <Button variant="dark" onClick={handleRegisterClick}>
                        Register
                    </Button>
                </Nav>
            </Container>
            <LoginModal show={showLoginModal} onHide={handleLoginModalClose} />
            <RegisterModal show={showRegisterModal} onHide={handleRegisterModalClose} />
        </Navbar>
    );
}

export default CustomNavbar;
