import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

export const AgeCalculator = () => {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge = (birthdate) => {
        const now = new Date();
        const birthDate = new Date(birthdate);

        // Calculate age in years
        let years = now.getFullYear() - birthDate.getFullYear();
        const birthMonth = birthDate.getMonth();
        const nowMonth = now.getMonth();

        // Adjust years if the birth month and day haven't occurred yet this year
        if (nowMonth < birthMonth || (nowMonth === birthMonth && now.getDate() < birthDate.getDate())) {
            years--;
        }

        // Calculate age in months
        let months = nowMonth - birthMonth;
        if (months < 0) {
            months += 12;
        }
        if (now.getDate() < birthDate.getDate()) {
            months -= 1;
        }

        // Calculate age in days
        const birthDayOfMonth = birthDate.getDate();
        let days = now.getDate() - birthDayOfMonth;
        if (days < 0) {
            const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += previousMonth.getDate();
        }

        // Calculate remaining time difference in hours, minutes, and seconds
        const nowTime = now.getTime();
        const birthTime = birthDate.getTime();
        const timeDifference = nowTime - birthTime;

        // Calculate total age in seconds
        const totalSeconds = Math.floor(timeDifference / 1000);

        // Calculate remaining time in seconds, minutes, and hours
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const minutes = totalMinutes % 60;
        const totalHours = Math.floor(totalMinutes / 60);
        const hours = totalHours % 24;

        // Calculate weeks relative to the remaining days
        const weeks = Math.floor(days / 7);
        days = days % 7;

        // Return the calculated age details
        return {
            years,
            months,
            weeks,
            days,
            hours,
            minutes,
            seconds
        };
    };
    const handleCalculate = (event) => {
        // Prevent form submission and page refresh
        event.preventDefault();
        const detailedAge = calculateAge(birthdate);
        setAge(detailedAge);
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
                        <button onClick={handleCalculate}>
                            <span>Calculate Age</span>
                        </button>
                    </Form>
                    {age && (
                        <div className="age-result">
                            <p>Your age is:</p>
                            <p>{age.years} years, {age.months} months, {age.weeks} weeks, and {age.days} days</p>
                            <p>{age.hours} hours, {age.minutes} minutes, and {age.seconds} seconds</p>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

