import React from 'react';
import { WORKSPACE_TEMPLATE } from '../../../../mockups/workspace';

const WorkSpaceTitle: React.FC = () => {
  return (
    <>
      {WORKSPACE_TEMPLATE.map((v) => (
        <div className="text-white font-bold text-lg mt-5 ml-8">{v.name}</div>
      ))}
    </>
  );
};
export default WorkSpaceTitle;
