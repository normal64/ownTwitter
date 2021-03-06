import tweets from "../apis/tweets";
import {useSelector} from "react-redux" ;

export const signIn = (userId) =>{
    console.log("sign in action creator",userId);
    return{
        type: "SIGN_IN",
        payload: userId
    }
}
export const signOut = () =>{
    console.log("sign in action creator");
    return{
        type: "SIGN_OUT",
        
    }
}
export const editLiked =    (userId,tweetId) => async(dispatch,getState)   =>{
    console.log(`action creator tweetId userId`, tweetId, userId);
    await dispatch({
        type: "EDIT_LIKED",
        payload: tweetId
    })
    const currentUserData = getState().authReducer.currentUserData;
    console.log(`currentUserData editLiked action reducer`,userId, currentUserData);
    const response =    await tweets.patch(`/users/id${userId}`,currentUserData )
}
export const newTweet = (userId,tweet) => async(dispatch,getState) =>{
    console.log("new tweet action creator",tweet);
    dispatch({
        type:"NEW_TWEET",
        payload: tweet.tweet
    })
    const currentUserData = getState().authReducer.currentUserData;
    console.log(`currentUserData editLiked action reducer`,userId, currentUserData);
    const response =    await tweets.patch(`/users/id${userId}`,currentUserData )
}
export const deleteTweet = (userID,id) => async(dispatch,getState) =>{
    console.log(`deleteTweet action creator ID:`,id);
    dispatch({
        type:"DELETE_TWEET",
        payload: id
    });
    const currentUserData = getState().authReducer.currentUserData;
const response =    await tweets.patch(`/users/id${userID}`,currentUserData )
}
export const fetchTweet = (userId) => async (dispatch) =>{
    console.log("fetch tweet");
    const response = await tweets.get("/users");
    const filteredUserData = response.data.filter(elem => elem.userId == userId);
    
    dispatch({
        type:"FETCH_TWEET",
        payload: filteredUserData[0]
    })

}
export const createUser = (data) => async(dispatch,getState) =>{
    console.log(`create user action creator reached`,data);
    dispatch({
        type:"CREATE_USER",
        payload: data
    })
    const currentUserData = getState().authReducer.currentUserData;
    console.log(`currentUserData editLiked action reducer`, currentUserData);
    await tweets.post(`/users`,currentUserData )
    
}
