import React from 'react';
import {Icon} from "semantic-ui-react";
import {useSelector} from "react-redux" ;
import { Dimmer, Loader,  Segment } from 'semantic-ui-react'



const UserDescriptionBox = () => {
    const currentUserData = useSelector(state => state.authReducer.currentUserData);
    
    const renderLoading = () => {
        return(
        
<Icon loading name='spinner' />
        )
    }
    const renderInfo =() => {
    
        return(
            <div className="ui sizer vertical segment">
        <div className="ui tiny header">{currentUserData.userDescription}</div>
        <Icon name="location arrow" />{currentUserData.location} <br/>
        <Icon name="shopping bag" />{currentUserData.occupation}<br/>
        <Icon name="calendar outline" />Registered {currentUserData.registrationDate}<br/>
        <p></p>
        </div> 
        )
    }

    const renderUserInfo = () =>{
            return currentUserData ? renderInfo()
                : renderLoading()
    }

    return (
            <>
            
            {renderUserInfo()}
            </>
    )
}

export default UserDescriptionBox
