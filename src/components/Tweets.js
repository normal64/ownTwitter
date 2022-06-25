import React,{useState} from "react";
import { Header, Image, Icon } from "semantic-ui-react";
import "../styles/Tweets.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchTweet, editLiked } from "../actions";
import { Segment } from "semantic-ui-react";
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  VKShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, RedditIcon, VKIcon } from "react-share";

const handleLikeClick = (e, dispatch, userId, tweetId) => {
  if (e.target.classList.contains("like")) {
    console.log("like clicked id and userId", tweetId, userId);
    dispatch(editLiked(userId, tweetId));
  }
};

const Tweets = () => {
  const signedInStatus = useSelector((state) => state.authReducer.isSignedIn);
  const currentUserData = useSelector(
    (state) => state.authReducer.currentUserData
  );
  const userId = useSelector((state) => state.authReducer.userId);
  

  const dispatch = useDispatch();
  const openShare = (e) =>{
    
    console.log(`CLICKED OPEN`, e.target.nextElementSibling.classList.contains("hide"));
    if(e.target.nextElementSibling.classList.contains("hide")){
      e.target.nextElementSibling.classList.remove("hide")
    }else e.target.nextElementSibling.classList.add("hide")

    
  }

  // if(signedInStatus){
  //     dispatch(fetchTweet());
  // }
  const renderTweet = () => {
    currentUserData
      ? window.history.replaceState(
          null,
          "New Page Title",
          currentUserData.userurl
        )
      : console.log("url");
    return currentUserData
      ? currentUserData.tweets.map((tweet) => {
          return (
            <div className="tweet" key={tweet.content + tweet.timeDate}>
              <div className="user-icon">
                <Image size="tiny" circular src={currentUserData.avatarURL} />
              </div>
              <div className="tweet-content">
                <div className="tweet-header">
                  <Header size="small">{currentUserData.username} </Header>
                  <Header size="tiny">{currentUserData.userurl} </Header>
                  <Header size="tiny"> {tweet.timeDate}</Header>
                </div>
                <div className="tweet-body">
                  <p>{tweet.content}</p>
                </div>
                <div className="tweet-functionality">
                  <div>
                    <Icon disabled name="comment outline" size="large" />
                    {tweet.comments}
                  </div>
                  <div>
                    <Icon disabled name="retweet" size="large" />
                    {tweet.retweet}
                  </div>
                  <div
                    onClick={(e) =>
                      handleLikeClick(e, dispatch, userId, tweet.id)
                    }
                  >
                    <Icon
                      disabled
                      name="like"
                      color={tweet.liked ? "red" : "grey"}
                      size="large"
                    />
                    {tweet.likes}
                  </div>
                  <div className="share-socials" onClick={(e)=>  openShare(e)}>
                    <Icon disabled name="share square" size="large"  />
                    <Segment.Group horizontal 
                      className="hide socials"
                    >
                      <Segment>
                      <FacebookShareButton
                      url={"https://github.com/normal64/ownTwitter"}
                      quote={""}
                      hashtag={"#hashtag"}
                      description={"facebook"}
                      className="Demo__some-network__share-button"
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                      </Segment>
                      <Segment>
                      <RedditShareButton
                      url={"https://github.com/normal64/ownTwitter"}
                      quote={""}
                      hashtag={"#hashtag"}
                      description={"facebook"}
                      className="Demo__some-network__share-button"
                    >
                      <RedditIcon size={32} round />
                    </RedditShareButton>
                        </Segment>
                      <Segment>
                      <VKShareButton
                      url={"https://github.com/normal64/ownTwitter"}
                      quote={""}
                      hashtag={"#hashtag"}
                      description={"facebook"}
                      className="Demo__some-network__share-button"
                    >
                      <VKIcon size={32} round />
                    </VKShareButton>
                        </Segment>
                    </Segment.Group>
                    
                    
                  </div>
                  
                </div>
                
              </div>
            </div>
          );
        })
      : "Loading";
  };
  return <div>{renderTweet()}</div>;
};

export default Tweets;
