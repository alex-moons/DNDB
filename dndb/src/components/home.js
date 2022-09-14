import React from "react";
// import {firestore} from "../firebase";
// import {addDoc, collection} from "@firebase/firestore"
// import { getDatabase, ref, child, get } from "firebase/database";

import Menu from "../navbar/menu";
import AppRoutes from "./routes/app_routes";

export default function Home(){

/*     const handleSave = async(e) => {
        e.preventDefault();
        console.log(messageRef.current.value);

        let data = {
            message: messageRef.current.value,
        };

        //Pushing data
        try {
            addDoc(ref,data)
        } catch (e) {
            console.log(e);
        }
    } */

    return (
        <div>
            <Menu />
            <AppRoutes />
        </div>
    );
}