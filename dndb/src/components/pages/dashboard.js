import React from "react";
import {Button, Card , Col, Container, Row} from "react-bootstrap";

const Dashboard = () => {
    return (
        <Container fluid>
            <h1>Dashboard</h1> 
            <Col className="col-12 my">
                <Row className="rowDash">
                <Card className="charCard" bg="Danger" style={{ width: '13rem'}}>
                <Card.Img className="cardImg" variant="top" src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="charCard" style={{ width: '13rem' }}>
                <Card.Img className="cardImg" variant="top" src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="charCard" style={{ width: '13rem' }}>
                <Card.Img className="cardImg" variant="top" src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>

                </Row>
            </Col>
        </Container>
    )
};

export default Dashboard;