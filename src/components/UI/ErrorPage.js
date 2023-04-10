import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-gray-700">Oops!</h1>
      <p className="text-2xl font-bold text-gray-700 mt-2">Something went wrong.</p>
      <p className="text-gray-500 mt-4"> Please try again later.</p>
    </div>
  );
};

export default ErrorPage;
