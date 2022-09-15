import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { Col, Row } from "react-bootstrap";
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
                    <Usernames
                            email={user.id}
                            name={user.name}
                        />
                </Row>
            ))}
        </div>
    )
};

export default Fetch;