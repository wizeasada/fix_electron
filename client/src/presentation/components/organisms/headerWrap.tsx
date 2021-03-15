import React from 'react';
import Menu from './menu';
import SearchBox from './searchBox';
import WorkSpaceTitle from './workSpace/workSpaceTitle/workSpaceTitle';

const HeaderWrap: React.FC = () => {
  return (
    <div className="flex h-header bg-gray-800">
      <div className="flex-1 justify-start">
        <WorkSpaceTitle />
      </div>
      <div className="flex justify-end">
        <SearchBox />
        <Menu />
      </div>
    </div>
  );
};
export default HeaderWrap;
