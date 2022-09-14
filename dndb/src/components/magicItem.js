import { Container, Col } from "react-bootstrap";
import React from "react"

const MagicItem = (properties) => {
    return (
        <Container>
            <Col>{properties.name}</Col>
            <Col>{properties.equipment_category.name}</Col>
            <Col>{properties.rarity.name}</Col>
            <Col>{properties.desc}</Col>
        </Container>
    )
}

export default MagicItem;