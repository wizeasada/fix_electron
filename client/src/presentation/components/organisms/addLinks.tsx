import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AddLinks: React.FC = () => {
  const openLinkIcon: React.CSSProperties = {};
  const closeLinkIcon: React.CSSProperties = {};
  return (
    <div className="">
      <span className="block text-gray-700 text-left px-2 py-2">
        <FontAwesomeIcon style={openLinkIcon} icon={faPlusSquare} /> Pjaaa
        <span className="block text-gray-700 text-left px-2 py-2">
          <FontAwesomeIcon style={closeLinkIcon} icon={faMinusSquare} /> Parent
          <span className="block text-gray-700 text-left px-2 py-2">
            <FontAwesomeIcon style={closeLinkIcon} icon={faMinusSquare} /> Child
          </span>
        </span>
      </span>
    </div>
  );
};
export default AddLinks;
