import React, { useState, useEffect } from 'react'
import { Form, Button, Alert, Container } from 'react-bootstrap'

const FormaUsht7 = () => {
    const [emri, setEmri] = useState("")
    const [mbiemri, setMbiemri] = useState("")
    const [email, setEmail] = useState("")
    const [mesazhi, setMesazhi] = useState("")
    const [sms, setSms] = useState("")
    const [show, setShow] = useState(false)
    const [alert, setAlert] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        if (emri === "" || mbiemri === "" || email === "" || mesazhi === "") {
            setSms("Ju lutem duhet te plotesoni te gjitha fushat")
            setAlert("danger")
            setShow(true)
        } else {
            setSms("Faleminderit " + emri + " " + mbiemri + " per mesazhin tuaj")
            setAlert("success")
            setShow(true)
            setEmri("")
            setMbiemri("")
            setEmail("")
            setMesazhi("")
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, 3000)
        return () => clearTimeout(timer)
    }, [show])

    return (
        <Container fluid className="p-5 bg-light">
            <Form onSubmit={handleSubmit}>
                {
                    show && <Alert variant={alert}>
                        <p>{sms}</p>
                    </Alert>
                }
                <Form.Group className="mb-3" controlId="emri">
                    <Form.Label>Emri</Form.Label>
                    <Form.Control type="text" value={emri} onChange={(e) => setEmri(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mbiemri">
                    <Form.Label>Mbiemri</Form.Label>
                    <Form.Control type="text" value={mbiemri} onChange={(e) => setMbiemri(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mesazhi">
                    <Form.Label>Mesazhi</Form.Label>
                    <Form.Control as="textarea" rows={4} value={mesazhi} onChange={(e) => setMesazhi(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default FormaUsht7