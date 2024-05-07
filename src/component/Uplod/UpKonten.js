import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function UploadModal({ show, handleClose }) {
    const [namaKarya, setNamaKarya] = useState("");
    const [namaPengupload, setNamaPengupload] = useState("");
    const [linkInstagram, setLinkInstagram] = useState("");
    const [tipeKarya, setTipeKarya] = useState("");
    const [file, setFile] = useState(null);
    const [deskripsiKarya, setDeskripsiKarya] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, such as sending data to the server
        console.log({
            namaKarya,
            namaPengupload,
            linkInstagram,
            tipeKarya,
            file,
            deskripsiKarya,
        });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Upload Your Artwork</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="namaKarya">
                        <Form.Label>Nama Karya</Form.Label>
                        <Form.Control type="text" placeholder="Enter Nama Karya" value={namaKarya} onChange={(e) => setNamaKarya(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="namaPengupload">
                        <Form.Label>Nama Pengupload</Form.Label>
                        <Form.Control type="text" placeholder="Enter Nama Pengupload" value={namaPengupload} onChange={(e) => setNamaPengupload(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="linkInstagram">
                        <Form.Label>Link Instagram</Form.Label>
                        <Form.Control type="text" placeholder="Enter Link Instagram" value={linkInstagram} onChange={(e) => setLinkInstagram(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="tipeKarya">
                        <Form.Label>Tipe Karya</Form.Label>
                        <Form.Control as="select" value={tipeKarya} onChange={(e) => setTipeKarya(e.target.value)}>
                            <option value="">Pilih Tipe Karya</option>
                            <option value="Artwork">Artwork</option>
                            <option value="Photography">Photography</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="file">
                        <Form.Label>Upload Foto</Form.Label>
                        <Form.Control type="file" onChange={handleFileChange} />
                    </Form.Group>

                    <Form.Group controlId="deskripsiKarya">
                        <Form.Label>Deskripsi Karya</Form.Label>
                        <Form.Control as="textarea" rows={3} value={deskripsiKarya} onChange={(e) => setDeskripsiKarya(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default UploadModal;
