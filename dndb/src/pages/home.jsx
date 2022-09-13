import React, { useRef } from "react";
import {firestore} from "../firebase";
import {addDoc, collection} from "@firebase/firestore"
import { getDatabase, ref, child, get } from "firebase/database";


export default function Home(){
    const messageRef = useRef();
    const ref = collection(firestore,"Users");

    const handleSave = async(e) => {
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
    }

    // const dbRef = ref(getDatabase());
    // get(child(dbRef, `Users/${message}`)).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //   } else {
    //     console.log("No data available");
    //   }
    // }).catch((error) => {
    //   console.error(error);
    // });

    return (<div>
        <form onSubmit={handleSave}>
            <label>Name:</label>
            <input type="text" ref={messageRef}/>
            <button type='submit' >send</button>
        </form>
    </div>
    )
}