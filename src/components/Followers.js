import React from 'react';
import "../styles/FollowersBox.scss";
import {useSelector} from "react-redux" ;
import { Icon,Dimmer, Loader,  Segment } from 'semantic-ui-react'


        

const Followers = () => {
    const currentUserData = useSelector(state => state.authReducer.currentUserData);
    const renderFollowers = () =>{
        return ( currentUserData ?
            <div className="followers-block">
            <Segment  compact> {currentUserData.following} Following</Segment>
            <Segment compact> {currentUserData.followers} Followers</Segment>
            </div>
            :
            <Icon loading name='spinner' />
            )
    }
    return (
        <>
        {renderFollowers()}
        </>
    )
}

export default Followers
