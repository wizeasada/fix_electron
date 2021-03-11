import React from 'react';
import LinkBlocks from './linkBlock';

const BodyWrap: React.FC = () => {
  return (
    <div className="flex h-body">
      <LinkBlocks />
    </div>
  );
};
export default BodyWrap;
