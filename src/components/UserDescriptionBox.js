import React from 'react'
import {Icon} from "semantic-ui-react"

const UserDescriptionBox = () => {
    return (
        <div class="ui sizer vertical segment">
        <div class="ui tiny header">Short description</div>
        <Icon name="location arrow" />Location <br/>
        <Icon name="shopping bag" />Occupation<br/>
        <Icon name="calendar outline" />Registration date<br/>
        
        <p></p>
        </div>
    )
}

export default UserDescriptionBox
