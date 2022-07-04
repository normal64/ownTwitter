const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    currentUserData: null,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload
            }
        case "SIGN_OUT":
            return {
                ...state,
                isSignedIn: false
            }
        case "FETCH_TWEET":
            
            return {
                ...state,
                currentUserData: action.payload
            }
        case  "NEW_TWEET":
            return{
                ...state,
                currentUserData: {
                    ...state.currentUserData,
                    tweets: [
                        {
                            "id": state.currentUserData.tweets[0] ? state.currentUserData.tweets[0].id + 1 : 0,
                            "content": action.payload ,
                            "comments": 0,
                            "retweet": 0,
                            "timeDate": new Date().toJSON().replace(/T/, ' ').replace(/\..+/, ''),
                            "likes": 0,
                            "liked":false
                        },
                        ...state.currentUserData.tweets
                    ]
                }
            }
        case "EDIT_LIKED":
            
            return {
                ...state,
                currentUserData: {
                    ...state.currentUserData,
                    tweets: [...state.currentUserData.tweets.map((tweet, index) => {
                        
                        if (tweet.id == action.payload) {
                            console.log(`MATCH tweet`, tweet);
                            return {
                                ...tweet,
                                "likes": tweet.liked  ? tweet.likes - 1 : tweet.likes + 1 ,
                                "liked": !tweet.liked
                            }
                        } else return tweet
                    })
                    ]
                }
            }
        case "DELETE_TWEET":
            console.log("delete tweet reducer reached", action.payload);
            return {
                ...state,
                currentUserData: {
                    ...state.currentUserData,
                    tweets: [...state.currentUserData.tweets.filter((tweet, index) => {
                        
                        if (tweet.id !== action.payload) {
                            
                            return tweet
                        } 
                    })
                    ]
                }
            }
        case "CREATE_USER":
            console.log("create user reducer reached", action.payload);
            return{
                ...state,
                isSignedIn: true,
                userId: `${action.payload.userId}`,
                currentUserData: {
                    "id":  `id${action.payload.userId}`,
                    "userId": `${action.payload.userId}`,
                    "title": "huilo",
                    "author": "pidaras",
                    "avatarURL": `${action.payload.avatarURL}`,
                    "username": `${action.payload.username}`,
                    "userurl": `${action.payload.userurl}`,
                    "userDescription": `${action.payload.userDescription}`,
                    "location": `${action.payload.location}`,
                    "occupation": `${action.payload.occupation}`,
                    "registrationDate": "09.12.2005",
                    "following": 16,
                    "followers": 45,
                    "tweets":   [

                    ]
                
                }


            }


        default:
            return state
    }

}