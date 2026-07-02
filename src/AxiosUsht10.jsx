import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card } from 'react-bootstrap';

const AxiosUsht10 = () => {
    const [quotes, setQuotes] = useState([]);
    const axiosQuotes = async () => {
        try {
            const res = await axios.get("https://strangerthingsquotes.shadowdev.xyz/api/quotes/100");
            setQuotes(res.data);
        }

        catch (err) { console.log('Ka nje gabim:', err); }
    };
    useEffect(() => {
        axiosQuotes()
    }, [])
    return (
        <div >
            <h1>Afishimi me AXIOS</h1>
            <Container>
                <Row>
                    {quotes.map((quote, index) => {
                        return (
                            <Col key={index} md='4' className='mb-3'>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{quote.author}</Card.Title>
                                        <Card.Text>{quote.quote}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default AxiosUsht10