import React from 'react';
import HeaderWrap from './organisms/headerWrap';
import BodyWrap from './organisms/bodyWrap';

const Components: React.FC = () => {
  return (
    <div className="h-screen">
      <HeaderWrap />
      <BodyWrap />
    </div>
  );
};

export default Components;
