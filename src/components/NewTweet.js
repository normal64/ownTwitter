import React from 'react';
import {Field, reduxForm} from "redux-form";
import { useDispatch } from "react-redux";
import {newTweet} from '../actions/index';
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
            </div>
        </div>
    )
}

const NewTweet = (props) => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.authReducer.userId);

    const onSubmit = (formValues) =>{
        console.log("on submit happens",formValues,props);
        dispatch(newTweet(userId,formValues))
        formValues.tweet = ""
        // props.onSubmit(formValues)
    }
    return (
            <form className="ui form error clearing segment" 
             onSubmit={props.handleSubmit(onSubmit)}
            >
            <Field name="tweet" component={renderInput} label="Enter tweet"/>
            <button className="ui button blue right floated">Tweet</button>
        </form>
    )
}
export default reduxForm({
    form: "tweetForm",
    // validate: validate,
})(NewTweet);

