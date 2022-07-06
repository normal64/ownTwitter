import React from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import { useDispatch } from "react-redux";
import {createUser} from '../actions/index';
import {useSelector} from "react-redux" ;



const renderError = ({error, touched}) =>{
    if(touched && error){
        return(
            <div className="ui error message">
                <div className="header">
                    {error}
                </div>
            </div>
        )
    }
}
const renderInput  = ({input,label, meta}) =>{
    console.log("input", input);
    console.log(`meta`, meta);
    console.log(`label`, label);
    return(
        <div className="field">
            <label >{label} </label>
            <input {...input} autoComplete="off" />
            <div>
            {/* {renderError(meta)}  */}
            {renderError(meta)} 
            </div>
        </div>
    )
}

const RegistrationModal = props =>{
    const dispatch = useDispatch();
    const userId = useSelector(state => state.authReducer.userId);
    const navigate = useNavigate();
    const currentUserData = useSelector(
        (state) => state.authReducer.currentUserData
      );
    

    const onSubmit = (formValues) =>{
        console.log("on submit happens",formValues,props);
        console.log(`currentUserData`, currentUserData);
        dispatch(createUser(formValues))
        navigate(`/${currentUserData.userurl}`)
        // props.onSubmit(formValues)
    }

    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
            <div onClick={(e)=> e.stopPropagation()} className="ui standard modal visible active">
            
            <form className="ui form error clearing segment" 
            onSubmit={props.handleSubmit(onSubmit)}
            >
            <Field name="userId" component={renderInput} label="Enter desired user ID"/>
            <Field name="username" component={renderInput} label="Enter username"/>
            <Field name="userurl" component={renderInput} label="Enter userURL"/>
            <Field name="avatarURL" component={renderInput} label="Enter link to your profile picture"/>
            <Field name="userDescription" component={renderInput} label="Write about yourself"/>
            <Field name="location" component={renderInput} label="Enter your location"/>
            <Field name="occupation" component={renderInput} label="Enter your occupation"/>
            
            <button className="ui button blue right floated">Create</button>
            </form>
            </div>
        </div>,
        document.querySelector("#modal")
    );
}
const validate = (formValues) =>{
    const errors={};
    if(!formValues.userId){
        errors.userId = "You must enter an ID for your user"
    }
    if(!formValues.username){
        errors.username = "You must enter user name"
    }
    if(!formValues.userurl){
        errors.userurl = "You must enter an user URL"
    }
    if(!formValues.avatarURL){
        errors.avatarURL = "You must enter an avatarURL"
    }
    if(!formValues.userDescription){
        errors.userDescription = "You must enter some info about you"
    }
    if(!formValues.location){
        errors.location = "You must enter location"
    }
    if(!formValues.occupation){
        errors.occupation = "You must enter occupation"
    }
    
    return errors;

}
export default reduxForm({
    form: "registrationForm",
     validate: validate,
})(RegistrationModal);