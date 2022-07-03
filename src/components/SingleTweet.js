import {
    FacebookShareButton,
    TwitterShareButton,
    RedditShareButton,
    VKShareButton,
  } from "react-share";
  import {useEffect, useState} from "react"
  import { FacebookIcon, TwitterIcon, RedditIcon, VKIcon } from "react-share";
  import { useDispatch } from "react-redux";
  import { Segment } from "semantic-ui-react";
  import { useSelector } from "react-redux";
  import { Header, Image, Icon } from "semantic-ui-react";
  import { Link, useLocation } from 'react-router-dom';
  
  import { fetchTweet, editLiked } from "../actions";
  const handleLikeClick = (e, dispatch, userId, tweetId) => {
    
    if (e.target.classList.contains("like")) {
      console.log("like clicked id and userId", tweetId, userId);
      dispatch(editLiked(userId, tweetId));
    }
  };
  //code revision required in order to access any tweet by direct URL input
  //separete base with tweets and change id 
  
    
    const SingleTweet = (props) =>{
      let location = useLocation();
      const dispatch = useDispatch();
      let Url =location.pathname;
      const reg  = /^\/[^\/]*\//g;
      let adrWithoutId =  Url.match(reg)[0];
      let idFromUrl = Url.replace(adrWithoutId,'');

      const [currentUserData, setCurrentUserData] = useState();
      const currentTweetId = props.getMe;
      const currentUserDataTemp = useSelector(
        (state) =>  state.authReducer.currentUserData
      );
      const userId = useSelector((state) => state.authReducer.userId);
      let renderId = () => currentTweetId ? currentTweetId : idFromUrl;
      let fullAdress = window.location.href;
      console.log(`fullAdress`, fullAdress);


      const tweet = () =>currentUserData? currentUserData.tweets.filter( tweet => tweet.id == renderId() )[0] : "";
      useEffect(() => {
        setCurrentUserData(currentUserDataTemp)  
        renderTweet()
      }, [idFromUrl,Url,location,currentUserDataTemp,currentUserData])
      const openShare = (e) => {
        if (e.target.nextElementSibling.classList.contains("hide")) {
          e.target.nextElementSibling.classList.remove("hide")
        } else e.target.nextElementSibling.classList.add("hide")
      }
      const renderTweet = () =>{
        return tweet() ? 
        <div>
          <div className="return-button">
          <Link to={`/${currentUserData ? currentUserData.userurl : 'loading..'}`} >
          <Icon disabled size="big" name='arrow left' />Back to profile
                  </Link>
          </div>

        <div className="tweet" key={tweet.content + tweet.timeDate}>
        <div className="user-icon">
          <Image size="tiny" circular src={currentUserData ? currentUserData.avatarURL : "loading.."} />
        </div>
        <div className="tweet-content">
          <div className="tweet-header">
            <Header size="small">{currentUserData ? currentUserData.username : "loading.."} </Header>
            <Header size="tiny">{currentUserData ? currentUserData.userurl : "loading.."} </Header>
            <Header size="tiny">{tweet().timeDate} </Header>
            
          </div>
          <div className="tweet-body">
            <p>{tweet().content}</p>
          </div>
          <div className="tweet-functionality">
            <div>
              <Icon disabled name="comment outline" size="large" />
              {tweet().comments}
            </div>
            <div>
              <Icon disabled name="retweet" size="large" />
              {tweet().retweet}
            </div>
            <div 
            onClick={(e) =>
              handleLikeClick(e, dispatch, userId, tweet().id)
            }
            >
              <Icon
                disabled
                name="like"
                color={tweet().liked ? "red" : "grey"}
                size="large"
              />
              {tweet().likes}
            </div>
            <div className="share-socials" onClick={(e) => openShare(e)}>
              <Icon disabled name="share square" size="large" />
              <Segment.Group horizontal
                className="hide socials"
              >
                <Segment>
                  <FacebookShareButton
                    url={fullAdress}
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
                    url={fullAdress}
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
                    url={fullAdress}
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
      </div>
      :
      "Loading..."
      }
       return(
        renderTweet()
        
       )
     }
     export default SingleTweet