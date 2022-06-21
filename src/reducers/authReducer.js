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
        case "EDIT_LIKED":
            console.log("edit liked reducer reached");
            console.log(state.currentUserData.tweets[action.payload - 1]);
            return {
                ...state,
                currentUserData: {
                    ...state.currentUserData,
                    tweets: [...state.currentUserData.tweets.map((tweet, index) => {
                        console.log(`index ,tweet`, index, tweet);
                        if (index == action.payload - 1) {
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