//TODO: AppRouterを正しい位置に変更
import React from 'react';
//import { pullFunc } from 'shared/test';
//const pull = pullFunc;
//pull(2, 1);

const AppRouter: React.FC = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const buttonClasses = toggle ? 'bg-red-500 hover:bg-red-500' : 'bg-blue-500 hover:bg-blue-500';
  return (
    <div>
      <div>
        タイトル <input type="text" name="title" />
      </div>
      <div>
        URL <input type="text" name="url" />
      </div>
      <div className="bg-gray-200 flex items-center justify-center h-screen">
        <button className={`p-3 rounded-sm ${buttonClasses}`} onClick={() => setToggle(!toggle)}>
          保存
        </button>
      </div>
    </div>
  );
};

export default AppRouter;
