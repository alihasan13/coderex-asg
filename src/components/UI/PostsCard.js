import React from "react";

const PostsCard = (props) => {
  return (
    <div
      // key={props}
      className="bg-gray-100 p-4 mb-2 mx-6 roundeblock max-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700d-md"
    >
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.item.title}
      </h2>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.item.body}
      </p>
    </div>
  );
};

export default PostsCard;
