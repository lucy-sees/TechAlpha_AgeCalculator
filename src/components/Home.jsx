import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const HomePage = ({ navigateToCalculator }) => {
    return (
        <Container className="home-page" id="home">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Container>
                        <h1>Welcome to Age Calculator</h1>
                        <p>
                            Calculate your age quickly and accurately with our easy-to-use tool.
                        </p>
                        <p>
                            Just enter your birthdate, and we'll tell you how old you are in years, months, days, hours, minutes and seconds.
                        </p>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};