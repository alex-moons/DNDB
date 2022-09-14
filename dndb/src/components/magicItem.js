import { Container, Col, Row } from "react-bootstrap";
import React from "react"

const MagicItem = (properties) => {
    return (
        <Container>
            <Row >
                <Col>{properties.name}</Col>
                <Col>{properties.equipment_category.name}</Col>
                <Col>{properties.rarity.name}</Col>
                <Col xs={8}>{properties.desc}</Col>
            </Row>
        </Container>
    )
}

export default MagicItem;