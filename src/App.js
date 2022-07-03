import React,{useState} from 'react';
import GoogleAuth from "../src/components/GoogleAuth";
import UserHeader from "./components/UserHeader";
import SingleTweet from "./components/SingleTweet";

import UserDescriptionBox from "../src/components/UserDescriptionBox";
import Followers from "./components/Followers";
import Tweets from "./components/Tweets";
import { Header} from "semantic-ui-react";
import "./styles/Tweets.scss"

import NewTweet from "./components/NewTweet";
import { BrowserRouter, Route,Routes, Switch, Link } from 'react-router-dom';


const App = () => {
  const [currentTweet, setCurrentTweet] = useState();
    return (
        <div className="ui container">
            <BrowserRouter>
            <Header /> 
            <GoogleAuth /> 
            <UserHeader />
            <UserDescriptionBox />
            <Followers />
            <NewTweet />
            <Routes>
                    <Route path="/:username"  element={<Tweets getMe={setCurrentTweet}  />} />
                    <Route path="/:username/:id" exact element={<SingleTweet  getMe={currentTweet}  />} />
                    <Route path="/"  element={<Tweets getMe={setCurrentTweet}  />} />
                  </Routes>
            {/* <Tweets /> */}
            </BrowserRouter>
        </div>
    )
}

export default App;
