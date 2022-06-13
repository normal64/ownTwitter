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