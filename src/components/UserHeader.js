import React from 'react';
import { Header, Image, Button } from 'semantic-ui-react';
import "../styles/UserHeader.scss"

const UserHeader = () => {
    return (
        <div>
            <Header className="userheader-header" as='h2' image="https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg">
                <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                <Button color="black" floated="right"  className="subscribe-button">Subscribe</Button>
                <Header size='small'>USERNAME</Header>
                <Header size='tiny'>USERURL</Header>
            </Header>
            
        </div>
    )
}

export default UserHeader
