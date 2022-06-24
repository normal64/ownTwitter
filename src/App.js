import React from 'react';
import Header from "./components/Header";
import GoogleAuth from "../src/components/GoogleAuth";
import UserHeader from "./components/UserHeader";
import UserDescriptionBox from "../src/components/UserDescriptionBox";
import Followers from "./components/Followers";
import Tweets from "./components/Tweets";
import NewTweet from "./components/NewTweet"

const App = () => {
    return (
        <div className="ui container">
            <Header /> 
            <GoogleAuth /> 
            <UserHeader />
            <UserDescriptionBox />
            <Followers />
            <NewTweet />
            <Tweets />

        </div>
    )
}

export default App;
