import React from 'react';

const menuState = 'menu';
const Menu: React.FC = () => {
  return (
    <div className="flex px-3 py-2 m-2 bg-white hover:bg-purple-700">
      <span className="w-full">{menuState}</span>
    </div>
  );
};
export default Menu;
