import React, {useEffect, useState} from "react";
import { GoogleLogin, GoogleLogout} from 'react-google-login';
import { gapi } from 'gapi-script';
import { firestore } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";


export default function Login(){
    const ref = collection(firestore, "users");
    const [ profile, setProfile ] = useState([]);
    const clientId = '32351875976-m69h4suq0n8s8p17b9tntliivhjq2bei.apps.googleusercontent.com';

    const handleSave = async(e) => {
        e.preventDefault();
        console.log(profile.email);

        let data = {
            email: profile.email,
        }

        try{
            addDoc(ref,data);
        } catch(e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        setProfile(res.profileObj);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setProfile(null);
    };

    return (
        <div className="dispLogin">
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.imageUrl} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    saveData={handleSave}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
        </div>
    );
}