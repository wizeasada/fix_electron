//TODO: AppRouterを正しい位置に変更
import React from 'react';
//import { pullFunc } from 'shared/test';

//const pull = pullFunc;
//pull(2, 1);

const AppRouter: React.FC = () => {
  return (
    <div>
      <div>
        タイトル <input type="text" name="title" />
      </div>
      <div>
        URL <input type="text" name="url" />
      </div>
      <div>
        <button>保存</button>
      </div>
    </div>
  );
};

export default AppRouter;
