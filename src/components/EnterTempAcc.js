import React from 'react';
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import { useDispatch } from "react-redux";
import {fetchTweet,signIn} from '../actions/index';
import {useSelector} from "react-redux" ;
import "../styles/EnterTempAcc.scss"

const EnterTempAcc = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUserData = useSelector(
        (state) => state.authReducer.currentUserData
      );
    
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
    const onSubmit = (formValues) =>{
        console.log("on submit happens",formValues,props);
        dispatch(signIn(formValues.userId))
        dispatch(fetchTweet(formValues.userId))
        navigate(`/${currentUserData.userurl}`)
    }
    const renderInput  = ({input,label, meta}) =>{
        console.log("input", input);
        console.log(`meta`, meta);
        console.log(`label`, label);
        return(
            <div 
            className="field"
            >
                <label >{label} </label>
                <input {...input} autoComplete="off" />
                <div>
                {/* {renderError(meta)}  */}
                {renderError(meta)} 
                </div>
            </div>
        )
    }
    return (
        <div>
               <form className="ui form error clearing segment enter-temp-form" 
            onSubmit={props.handleSubmit(onSubmit)}
            >
            <Field name="userId" component={renderInput} label="Enter desired user ID"/>
            <button
                    className="ui brown google button"
                    // onClick={onTempRegistrationClick}
                >
                   Enter
            </button>
            </form>
            
        </div>
    )
}
const validate = (formValues) =>{
    const errors={};
    if(!formValues.userId){
        errors.userId = "You must enter an ID for your user"
    }
    
    
    return errors;

}
export default reduxForm({
    form: "EnterTempAccForm",
     validate: validate,
})(EnterTempAcc);

