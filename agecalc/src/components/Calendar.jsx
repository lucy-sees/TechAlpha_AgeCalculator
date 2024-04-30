import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css'; 

export const CalendarPage = () => {
    // State to store the selected date
    const [date, setDate] = useState(new Date());

    return (
        <Container className="calendar-page" id="calendar">
            <Row className="justify-content-center mt-5">
                <Col md={6}>
                    <h2>Calendar</h2>
                    <div className='calendar-container'>
                        <Calendar
                            onChange={setDate}
                            value={date}
                        />
                    </div>
                    <p className='text-center'>
                        <strong>Selected Date:</strong> {date.toDateString()}
                    </p>
                </Col>
            </Row>
        </Container>
    );
};
