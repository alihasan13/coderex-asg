import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="text-white  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-8   inline-flex items-center">
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="#F4442E"
      />
    </div>
  );
};

export default Loader;
