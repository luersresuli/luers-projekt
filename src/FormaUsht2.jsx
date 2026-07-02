import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import imazh from './images/image5.jpg';

const FormaUsht2 = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [select, setSelect] = useState("");
    const [date, setDate] = useState("");
    const [numberPerson, setNumberPerson] = useState(1);
    const [checkbox, setCheckbox] = useState({
        boarding: false,
        fooding: false,
        sightseeing: false,
    });
    const [discountCode, setDiscountCode] = useState("");
    const [agree, setAgree] = useState(null);
    const [sms, setSms] = useState("")
    const [show, setShow] = useState(false)
    const [alert, setAlert] = useState("success")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (fullName === "" || email === "" || numberPerson <= 0 || select === "" || date === "" || agree !== true || !checkbox.boarding && !checkbox.fooding && !checkbox.sightseeing) {
            setSms("Mos lini fushe pa plotesuar")
            setShow(true)
            setAlert("danger")
        } else {
            setSms("Faleminderit " + fullName)
            setShow(true)
            setAlert("success")
            setFullName("")
            setEmail("")
            setSelect("")
            setDate("")
            setNumberPerson(1)
            setCheckbox({
                boarding: false,
                fooding: false,
                sightseeing: false,
            })
            setDiscountCode("")
            setAgree(null)
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, 3000)
        return () => clearTimeout(timer)
    }, [show])

    return (
        <Container className='fluid'>
            <Row>
                <Col>
                    <img src={imazh} alt='imazh' style={{ width: "100%", height: "700px", }}></img>
                </Col>
                <Col className='formUsht2'>
                    <Form onSubmit={handleSubmit}>
                        {
                            show && <Alert variant={alert}>
                                <p>{sms}</p>
                            </Alert>
                        }
                        <Form.Group className="mb-3" controlId="fullName">
                            <Form.Label>Full Name:</Form.Label>
                            <Form.Control type="text" placeholder="FirstName LastName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='select'>
                            <Form.Select aria-label="Default select example" value={select} onChange={(e) => setSelect(e.target.value)}>
                                <option value="">Select tour package:</option>
                                <option value="goa">Goa</option>
                                <option value="fishing">Fishing</option>
                                <option value="hiking">Hiking</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="date">
                            <Form.Label>Arrival date:</Form.Label>
                            <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="numberPerson">
                            <Form.Label>Number of persons:</Form.Label>
                            <Form.Control type="number" min={1} value={numberPerson} onChange={(e) => setNumberPerson(Number(e.target.value))} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="checkBox">
                            <Form.Label>What would you want to avail:</Form.Label>
                            <div className="mb-3">
                                <Form.Check inline label="Boarding" checked={checkbox.boarding} onChange={(e) => setCheckbox({ ...checkbox, boarding: e.target.checked })} />
                                <Form.Check inline label="Fooding" checked={checkbox.fooding} onChange={(e) => setCheckbox({ ...checkbox, fooding: e.target.checked })} />
                                <Form.Check inline label="Sightseeing" checked={checkbox.sightseeing} onChange={(e) => setCheckbox({ ...checkbox, sightseeing: e.target.checked })} />
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="discountCode">
                            <Form.Label>Discount Coupon Code:</Form.Label>
                            <Form.Control type="text" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="agree">
                            <Form.Label>Terms and Conditions:</Form.Label>
                            <div className="mb-3">
                                <Form.Check inline type='radio' name='agree' label="I Agree" checked={agree === true} onChange={(e) => setAgree(true)} />
                                <Form.Check inline type='radio' name='agree' label="I Disagree" checked={agree === false} onChange={(e) => setAgree(false)} />
                            </div>
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={!fullName || !email || !select || !date || agree !== true}>Complete reservation</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default FormaUsht2