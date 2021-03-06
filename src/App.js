import React,{useState} from 'react';
import GoogleAuth from "../src/components/GoogleAuth";
import TempRegistration from "./components/TempRegistration"
import UserHeader from "./components/UserHeader";
import SingleTweet from "./components/SingleTweet";
import EnterTempAcc from "./components/EnterTempAcc";


import UserDescriptionBox from "../src/components/UserDescriptionBox";
import Followers from "./components/Followers";
import Tweets from "./components/Tweets";
import { Header} from "semantic-ui-react";
import "./styles/Tweets.scss"

import NewTweet from "./components/NewTweet";
import { BrowserRouter, Route,Routes, Switch, Link } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';


const App = () => {
  const [currentTweet, setCurrentTweet] = useState();
    return (
        <div className="ui container">
            <BrowserRouter>
            <Header /> 
            <GoogleAuth /> 
            <TempRegistration /> 
            <EnterTempAcc />
            <UserHeader />
            <UserDescriptionBox />
            <Followers />
            <NewTweet />
            <Routes>
                    <Route path="/registration"  element={<RegistrationForm   />} />
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
