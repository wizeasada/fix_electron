import React from 'react';
import Menu from './menu';
import SearchBox from './searchBox';

const HeaderWrap: React.FC = () => {
  return (
    <div className="bg-gray-800 h-header">
      <div className="flex justify-start"></div>
      <div className="flex justify-end">
        <SearchBox />
        <Menu />
      </div>
    </div>
  );
};
export default HeaderWrap;
