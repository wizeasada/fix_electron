import React, { useState } from 'react';
import { faMinusSquareIcon, faPlusSquareIcon } from '../../../../helper/fontAwesome';
import { LINKS } from '../../../../mockups/link';

//TODO:3階層になっているのを、n+1階層に変更にする,該当するidの展開を可能とする
const LinkWrap: React.FC = () => {
  const [firstLayer, setFirstLayer] = useState(false);
  const [secondLayer, setSecondLayer] = useState(false);
  const [thirdLayer, setThirdLayer] = useState(false);

  return (
    <>
      {LINKS.map((v, i) => (
        <div key={i}>
          <div className="block text-gray-700 text-left pr-6 py-2">
            {firstLayer ? (
              //1階層目:展開後
              <>
                <div className="cursor-pointer" onClick={() => setFirstLayer(false)}>
                  {faMinusSquareIcon}
                  {v.name}
                </div>
                {v.elements.map((vv, i) => (
                  <div className="block text-gray-700 text-left px-6 py-1" key={i}>
                    {secondLayer ? (
                      //TODO:コンポーネントを再帰
                      //2階層目:展開後
                      <>
                        <div className="cursor-pointer" onClick={() => setSecondLayer(false)}>
                          {faMinusSquareIcon}
                          {vv.name}
                        </div>
                        {vv.elements.map((vvv, i) => (
                          <div className="block text-gray-700 text-left px-6 py-1" key={i}>
                            {thirdLayer ? (
                              //3階層目:展開後
                              <div className="cursor-pointer" onClick={() => setThirdLayer(false)}>
                                {faMinusSquareIcon}
                                {vvv.name}
                              </div>
                            ) : (
                              //3階層目:展開前
                              <div className="cursor-pointer" onClick={() => setThirdLayer(true)}>
                                {faPlusSquareIcon}
                                {vvv.name}
                              </div>
                            )}
                          </div>
                        ))}
                      </>
                    ) : (
                      //2階層目:展開前
                      <div className="cursor-pointer" onClick={() => setSecondLayer(true)}>
                        {faPlusSquareIcon}
                        {vv.name}
                      </div>
                    )}
                  </div>
                ))}
              </>
            ) : (
              //1階層目:展開前（初期値）
              <div className="cursor-pointer" onClick={() => setFirstLayer(true)}>
                {faPlusSquareIcon}
                {v.name}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
export default LinkWrap;
