// src/DataPage.js
import ProfileInfoCard from "../UI/ProfileInfoCard";
import PostsCard from "../UI/PostsCard";
import Loader from "../UI/Loader";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ErrorPage from "../UI/ErrorPage";

const UserProfile = (props) => {

  const { id } = useParams();

  //for profile info
  const getProfileData = async (id) => {
    return await axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((response) => {
        return response.data;
      });
  };

  const profileData = useQuery(["users", id], () => getProfileData(id));

  const userProfileInfo = profileData.data;
  //for profile info ends

  const getPostData = async (id) => {
    return await axios
      .get(`https://dummyjson.com/users/${id}/posts`)
      .then((response) => {
        return response.data.posts;
      });
  };

  const postData = useQuery(["postInfo", id], () => getPostData(id));
  
  if (postData.isError) {
    return  <ErrorPage/>;
  }
 
  if (profileData.isError) {
    return <ErrorPage/>;
  }

  const posts = postData.data;
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-300">
      <h1 className="italic  underline mb-1 pb-4 text-4xl font-extrabold leading-none tracking-tight bg-gray-300 text-gray-500 md:text-5xl lg:text-6xl dark:text-blue">
        User Profile{" "}
      </h1>
      {profileData.isLoading? <Loader />:<ProfileInfoCard userInfo={userProfileInfo} />} {/* basic profile information  */}
      {postData.isLoading ?  <Loader /> : posts.map((item, index) => (
        <PostsCard key={index} item={item} />
      ))
      }
    </div>
  );
};

export default UserProfile;
