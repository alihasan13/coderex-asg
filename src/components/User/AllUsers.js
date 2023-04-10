import React from "react";
import "tailwindcss/tailwind.css";
import { useNavigate } from "react-router-dom";
import Loader from "../UI/Loader";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllUsers = (props) => {
  const navigate = useNavigate();

  //api call using react query
  const fetchUserData = async () => {
    return await axios.get("https://dummyjson.com/users").then((res) => {
      return res.data.users;
    });
  };
  const userData = useQuery(["users"], fetchUserData);

  if (userData.isLoading) {
    return <Loader />;
  }

  if (userData.isError) {
    return <span>Error: "Error happend"</span>;
  }
  const user = userData.data;

  const showProfile = (id) => {
    navigate(`/userProfile/${id}`);
  };

  return (
    <div className="container mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className=" italic  underline mb-1 pb-4 text-4xl font-extrabold leading-none tracking-tight bg-gray-300 text-gray-500 md:text-5xl lg:text-6xl dark:text-blue">
        All Users
      </h1>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400   ">
        <thead className=" display:block; text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Company Name
            </th>
          </tr>
        </thead>
        <tbody className="overflow-x-auto height:300px; overflow-y:scroll; display:block;">
          {user.map((user, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                onClick={() => showProfile(user.id)}
                className="cursor-pointer px-6 py-4"
              >
                {" "}
                {user.firstName} {user.lastName}
              </td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
