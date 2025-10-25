import React from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  console.log("Feed state:", feed);

  const getFeed = async () => {
    if (feed && feed.length > 0) return;
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if(!feed){
    return <div>Loading.....</div>
  }

  if(feed.length<=0)return <h1>No More Users Present</h1>

  return feed && <div className="flex justify-center items-center flex-wrap gap-4">
    {/* {
      feed.map((user,index)=>{
        return <UserCard user={user} key={index}></UserCard>
      })
    } */}
    <UserCard user={feed[0]}></UserCard>
  </div>;
};

export default Feed;
