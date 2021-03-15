import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox: React.FC = () => {
  const searchIcon: React.CSSProperties = { padding: 5, fontSize: 22 };
  return (
    <div className="flex px-4 py-2 m-2">
      <input className="w-full p-2 rounded-l-sm" type="text" placeholder="Search" />
      <button className="bg-white w-auto flex justify-end items-center text-blue-600 p-2 hover:text-blue-400 rounded-r-sm">
        <FontAwesomeIcon style={searchIcon} icon={faSearch} />
      </button>
    </div>
  );
};
export default SearchBox;
