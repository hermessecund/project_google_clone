import React from 'react';
import Loader from 'react-loader-spinner';

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Loader type="polygon" color="#00BFFF" height={250} width={30} />
  </div>
);
