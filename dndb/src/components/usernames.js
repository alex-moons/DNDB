import { Container, Col, Row } from "react-bootstrap";
import React from "react"

const Usernames = (properties) => {
    return (
        <Container>
            <Row >
                <Col>{properties.email}</Col>
                <Col>{properties.name}</Col>
            </Row>
        </Container>
    )
}

export default Usernames;