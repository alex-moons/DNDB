import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios"
import MagicItem from "../magicItem";

const ShowItems = () => {
    const nextItem = new Object();
    nextItem.index = "head-name";
    nextItem.name = "Name";
    nextItem.equipment_category = {}
    nextItem.equipment_category.index = "equipment-name";
    nextItem.equipment_category.name = "Equipment";
    nextItem.equipment_category.url = "url";
    nextItem.rarity = {};
    nextItem.rarity.name = "Rarity";
    nextItem.desc = ["Description"];
    const [itemsData, setItems] = useState([nextItem]);
    const baseUrl = "https://www.dnd5eapi.co"

    useEffect(() => {
        console.log("Receiving items from API");
        axios
        .get(
            "https://www.dnd5eapi.co/api/magic-items"
        )
        .then((response) => {
            /*console.log(response.data.results);*/
            response.data.results.map((item) => {
                const url = baseUrl + item.url;
                axios
                .get(
                    url
                )
                .then((response) =>{
                    /*console.log(response.data.name);*/
                    const nextItem = new Object();
                    nextItem.index = response.data.index;
                    nextItem.name = response.data.name;
                    nextItem.equipment_category = response.data.equipment_category;
                    nextItem.rarity = response.data.rarity;
                    nextItem.desc = response.data.desc;
                    if (itemsData.length === 0){
                        setItems([nextItem]);

                    } else {
                        setItems(itemsData => [...itemsData, nextItem]);
                    }
                });
            });
        });

        console.log("Items received");
}, []);
                
    return (
        <Container>
            <h1>All Magic Items</h1>
            <div>
                {itemsData.length === 0 ? (
                    <p>No hay datos</p>
                ) : (
                    itemsData
                    .map((item, i) => (
                    <Row key={item.index} id={i === 0 ? "col-items-title" : i % 2 === 0 ? "col-items-even" : "col-items-odd"}>
                        <MagicItem 
                            name={item.name}
                            equipment_category={item.equipment_category}
                            rarity={item.rarity}
                            desc={item.desc}
                        />
                    </Row>
                    ))
                )}
            </div>
        </Container>
    )
};

export default ShowItems;