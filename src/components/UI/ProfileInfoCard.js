import React from "react";

const ProfileInfoCard = (props) => {
  return (
    <div className="flex items-center  w-full justify-center py-3">
      <div className="max-w-xs">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              {props.userInfo
                ? props.userInfo.firstName + " " + props.userInfo.lastName
                : "no data"}
            </h3>

            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2">
                    {props.userInfo ? props.userInfo.email : "no data"}
                  </td>
                </tr>

                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Company Name
                  </td>
                  <td className="px-2 py-2">
                    {props.userInfo ? props.userInfo.company.name : "no data"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
