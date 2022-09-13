import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios"
import MagicItem from "../components/magicItem";

const ShowItems = () => {
    const [itemsData, setItems] = useState([]);

    useEffect(() => {
        console.log("Receiving items from API");
        axios
        .get(
            "https://www.dnd5eapi.co/api/magic-items"
        )
        .then((response) => {
            console.log(response.data.results);
            const items = response.data.results.map((item) => {
                return {
                    index: item.index,
                    name: item.name,
                    url: item.url
                }
            });
            console.log(items[0]);
            setItems(items);
        })
        .catch((error) => {
            console.log(error)
        })
        console.log("All items received")
    }, []);

    return (
        <Container>
            <h1>All Magic Items</h1>
            <div>
                {itemsData.length === 0 ? (
                    <p>No hay datos</p>
                ) : (
                    itemsData
                    .map((item) => (
                    <Row key={item.index}>
                        <Col>{item.name}</Col>
                        <Col>{item.url}</Col>
                    </Row>
                    ))
                )}
            </div>
        </Container>
    )
};

export default ShowItems;