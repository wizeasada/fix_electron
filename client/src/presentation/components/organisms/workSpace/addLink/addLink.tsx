import React, { useState } from 'react';
import { faPlusIcon } from '../../../../helper/fontAwesome';

const AddLink: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="fixed bottom-10 cursor-pointer " onClick={() => setShowModal(true)}>
        {faPlusIcon}
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center ">
                  <div className="container mx-auto">
                    <div className="max-w-md mx-2 my-auto">
                      <div className="m-20">
                        <form action="" className="">
                          <div className="mb-6">
                            <div className="flex justify-between mb-2">
                              <label htmlFor="url" className="text-sm text-gray-600 dark:text-gray-400">
                                タイトル
                                たいとる１
                                タイトル２
                                タイトル３

                              </label>
                            </div>
                            <input
                              type="text"
                              name="title"
                              id="url"
                              placeholder="Title"
                              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            />
                          </div>
                          <div className="mb-6">
                            <div className="flex justify-between mb-2">
                              <label htmlFor="url" className="text-sm text-gray-600 dark:text-gray-400">
                                URL
                              </label>
                            </div>
                            <input
                              type="text"
                              name="url"
                              id="url"
                              placeholder="URL"
                              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            />
                          </div>
                          <div className="mb-2">
                            <button
                              type="button"
                              className="text-white bg-gray-500 hover:bg-gray-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mt-3 mb-8 float-right"
                              onClick={() => {
                                setShowModal(false);
                              }}
                            >
                              保存
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default AddLink;
