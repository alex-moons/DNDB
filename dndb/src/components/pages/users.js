import React from "react";
import { firestore } from "../../firebase";
import { doc, setDoc } from "@firebase/firestore";
import Fetch from "../fetch";

const Users = () => {
    return (
        <div>
            <Fetch />
        </div>
    )
};

export default Users;