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
            console.log(`action.payload`, action.payload);
            return {
                ...state,
                currentUserData: action.payload
            }
        case  "NEW_TWEET":
            return{
                ...state,
                currentUserData: {
                    ...state.currentUserData,
                    tweets: [...state.currentUserData.tweets,
                        {
                            id: 98,
                            "content": action.payload ,
                            "comments": 0,
                            "retweet": 0,
                            "likes": 0,
                            "liked":false
                        }
                            

                    ]
                }

            }
        case "EDIT_LIKED":
            console.log("edit liked reducer reached", action.payload);
            return {
                ...state,
                currentUserData: {
                    ...state.currentUserData,
                    tweets: [...state.currentUserData.tweets.map((tweet, index) => {
                        console.log(`index ,tweet`, index, tweet);
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
        default:
            return state
    }

}