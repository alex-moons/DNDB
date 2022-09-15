import React, { useEffect, useState } from "react";
import { doc, collection, getDocs , deleteDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { Col, Row , Button, Container } from "react-bootstrap";
import { async } from "@firebase/util";
import Usernames from "./usernames";

const Fetch = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        ;(async() => {
            const colRef = collection(firestore, "users");
            const snapshot = await getDocs(colRef);

            const docs = snapshot.docs.map(doc => {
                const data = doc.data()
                data.id = doc.id;
                return data;
            });

            setUsers(docs);
            console.log(docs);
            
        })();
    },[]);

    const deleteUser = async (id) => {
        await firestore.collection("users").doc(id).delete();
        console.log(id);
        return id;
    };

    return (
        <div>
            <h1>Users</h1>
            <Row id="title-users">
                <Col>
                    <h2 id="user-table">Email</h2>
                </Col>
                <Col>
                    <h2 id="user-table">Name</h2>
                </Col>
                <Col>
                    <h2 id="user-table">Editar</h2>
                </Col>
                <Col>
                    <h2 id="user-table">Delete</h2>
                </Col>
            </Row>
            {users.map((user, i) => (
                <Row key={user.id} id="col-users">
                    <Row>
                        <Usernames
                                email={user.id}
                                name={user.name}
                            />
                        <Col><Button id="edit">Editar</Button></Col>
                        <Col><Button id="delete" onClick={() => deleteUser(user.id)}>Delete</Button></Col>
                    </Row>
                </Row>
            ))}
        </div>
    )
};

export default Fetch;