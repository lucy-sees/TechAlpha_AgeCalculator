import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

export const AgeCalculator = () => {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(null);

    // Function to calculate age in years, months, days, hours, minutes, and seconds
    const calculateAge = () => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        
        // Calculate time difference in milliseconds
        const timeDifference = today - birthDate;

        // Calculate years
        const ageDate = new Date(timeDifference);
        const years = ageDate.getUTCFullYear() - 1970;

        // Calculate months
        const months = ageDate.getUTCMonth();

        // Calculate days
        const days = ageDate.getUTCDate() - 1;

        // Calculate hours, minutes, and seconds
        const hours = ageDate.getUTCHours();
        const minutes = ageDate.getUTCMinutes();
        const seconds = ageDate.getUTCSeconds();

        // Set the calculated age state
        setAge({ years, months, days, hours, minutes, seconds });
    };


    return (
        <Container className="age-calculator">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form>
                        <Form.Group controlId="birthdate">
                            <Form.Label>Enter your birthdate</Form.Label>
                            <Form.Control
                                type="date"
                                value={birthdate}
                                onChange={(e) => setBirthdate(e.target.value)}
                            />
                        </Form.Group>
                        <button  onClick={calculateAge}>
                            <span>Calculate Age</span>
                        </button>
                    </Form>
                    {age && (
                        <div className="age-result">
                            <p>Your age is:</p>
                            <p>{age.years} years, {age.months} months, {age.days} days,</p>
                            <p>{age.hours} hours, {age.minutes} minutes, and {age.seconds} seconds.</p>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

