import React from 'react';
import { Segment } from 'semantic-ui-react';
import "../styles/FollowersBox.scss";
import {useSelector} from "react-redux" ;

        

const Followers = () => {
    const currentUserData = useSelector(state => state.authReducer.currentUserData);
    const renderFollowers = () =>{
        return ( currentUserData ?
            <div className="followers-block">
            <Segment  compact> {currentUserData.following} Following</Segment>
            <Segment compact> {currentUserData.followers} Followers</Segment>
            </div>
            :
            "Loading..."
            )
    }
    return (
        <>
        {renderFollowers()}
        </>
    )
}

export default Followers
