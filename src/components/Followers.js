import React from 'react';
import { Segment } from 'semantic-ui-react';
import "../styles/FollowersBox.scss"

const Followers = () => {
    return (
        <div className="followers-block">
        <Segment  compact> Following</Segment>
        <Segment compact>Followers</Segment>
        </div>
        
    )
}

export default Followers
