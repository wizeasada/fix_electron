import React from 'react';
import AddLinks from './addLinks';

const LinkBlocks: React.FC = () => {
  return (
    <>
      <div className="flex-1 text-gray-700 text-center bg-gray-100 rounded-lg px-4 py-4 my-8 ml-8">
        <AddLinks />
      </div>
      <div className="flex-1 text-gray-700 text-center bg-gray-100 rounded-md px-4 py-4 m-8"></div>
      <div className="flex-1 text-gray-700 text-center bg-gray-100 rounded-md px-4 my-8 mr-8"></div>
    </>
  );
};
export default LinkBlocks;
