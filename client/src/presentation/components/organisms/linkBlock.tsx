import React from 'react';
import AddLink from './workSpace/addLink/addLink';
import LinkWrap from './workSpace/linkWrap/linkWrap';

//TODO:ここでthreeAggElementsBlocksの配列[0]-[2]の3つを返す様にするか
const LinkBlocks: React.FC = () => {
  return (
    <>
      <div className="relative overflow-x-auto overflow-auto overscroll-none flex-1 text-gray-700 text-center bg-gray-100 rounded-lg px-4 py-4 my-8 ml-8">
        <LinkWrap />
        <AddLink />
      </div>
      <div className="relative overflow-x-auto overflow-auto overscroll-none flex-1 text-gray-700 text-center bg-gray-100 rounded-md px-4 py-4 m-8">
        <LinkWrap />
        <AddLink />
      </div>
      <div className="relative overflow-x-auto overflow-auto overscroll-none flex-1 text-gray-700 text-center bg-gray-100 rounded-md px-4 my-8 mr-8">
        <LinkWrap />
        <AddLink />
      </div>
    </>
  );
};
export default LinkBlocks;
