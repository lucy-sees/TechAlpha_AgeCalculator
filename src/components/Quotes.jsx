import React, { useEffect, useState } from 'react';
import { Container, Spinner, Alert, Row, Col, Card } from 'react-bootstrap';

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const Quotes = () => {
    const [quoteData, setQuoteData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setQuoteData(data[0]);
            setIsLoading(false);
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Display loading spinner or error message
    if (isLoading) {
        return (
            <Container className="mt-3">
                <Row className="justify-content-center">
                    <Spinner animation="border" variant="primary" />
                </Row>
            </Container>
        );
    }

    if (isError) {
        return (
            <Container className="mt-3">
                <Alert variant="danger">
                    There must be some error.
                </Alert>
            </Container>
        );
    }

    // Display the quote
    return (
        <Container className="mt-3" id="quotes">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="quote-container">
                        <Card.Header as="h5">Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p className="quote-text">{`"${quoteData.quote}"`}</p>
                                <footer className="blockquote-footer">
                                    <cite title="Source Title" className="quote-author">{quoteData.author}</cite>
                                    <br />
                                    <small className="quote-category">Category: {quoteData.category}</small>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
