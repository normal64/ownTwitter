import React from 'react';
import {useEffect,useState} from "react";
import {signIn, signOut,fetchTweet} from '../actions'
import {useSelector} from "react-redux" ;
import { useDispatch } from "react-redux";
import "../styles/GoogleAuth.scss";

const GoogleAuth = () => {
    const signedInStatus = useSelector(state => state.authReducer.isSignedIn);
    const currentUserData = useSelector(state => state.authReducer.currentUserData);
    console.log(`USE EFFECT signedInStatus`, signedInStatus);
    const dispatch = useDispatch();
    const [auth, setAuth] = useState()
    useEffect(() => {
        console.log("auth effect happen");
        window.gapi.load("client:auth2",()  =>{
            window.gapi.client.init({
                clientId: "680516326791-rlqaktau2mn7se3e4mfhmh3k6m90ckfi.apps.googleusercontent.com",
                scope: "email"
            }).then(    ()  => {
                let auth = window.gapi.auth2.getAuthInstance();
              
                setAuth(auth)
                onAuthChange(auth.isSignedIn.get())
                 auth.isSignedIn.listen(onAuthChange)
                 
            })
        });
        return () => {
        }
    },[]);
    console.log(`auth`,auth );
    const onAuthChange = (signedInStatus) =>{
        console.log("auth change signin status", signedInStatus);
        console.log(`window.gapi.auth2.getAuthInstance().currentUser.get`, window.gapi.auth2.getAuthInstance().currentUser.get());
        if(signedInStatus){
            console.log("signed in");
            dispatch(signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId()))
            window.history.replaceState(
                null,
                "New Page Title",
                currentUserData ? currentUserData.userurl : ""
              )
            dispatch(fetchTweet());
        }else {
            console.log("sign out");
            dispatch(signOut())
            
        }
    }
    const renderAuthButton = () =>{
        console.log(`signInStatus in renderAuthButton`, signedInStatus);
       
        if(signedInStatus == "none"  ){
            return(
                <div className="ui active inline loader"></div>           
            )
        }else if(signedInStatus){
                return (
                    <button className="ui red google button right floated" onClick={onSignOutClick}>
                        <i className="google icon"></i>Sign out
                        </button>
                )
        }else return(
            <button className="ui red google button right floated " onClick={onSignInClick}>
                <i className="google icon"></i>Sign in
                </button>
        )
    }
    const onSignInClick =   () =>{
        console.log("this is sign in click");
        auth.signIn();
    }
    const onSignOutClick = () =>{
        console.log("this is sign OUT click");
        auth.signOut();
    }
    
    return (
        <div className="googleauth-container">
            {renderAuthButton(signedInStatus)}
        </div>
    )
}

export default GoogleAuth
