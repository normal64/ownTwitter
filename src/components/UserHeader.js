import React from 'react';
import { Header, Image, Button } from 'semantic-ui-react';
import "../styles/UserHeader.scss"
import {useSelector} from "react-redux" ;
import { Dimmer, Loader,  Segment } from 'semantic-ui-react'


const UserHeader = () => {
    const currentUserData = useSelector(state => state.authReducer.currentUserData);
     
    const renderLoading = () => {
        return(
        //     <Dimmer active>
        //     <Loader />
        //   </Dimmer>
        "loading.."
        )
    }
    return (
        <div>
            <Header className="userheader-header" as='h2' image="https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg">
                <Image circular src={currentUserData ? currentUserData.avatarURL : renderLoading() } />
                <Button color="black" floated="right"  className="subscribe-button">Subscribe</Button>
                <Header size='small'>{currentUserData? currentUserData.username 
                :  renderLoading()
                 }
                </Header>
                <Header size='tiny'>@{currentUserData? currentUserData.userurl 
                : renderLoading()
                 }
                 </Header>
            </Header>
            
        </div>
    )
}

export default UserHeader
