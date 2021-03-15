import React from 'react';
import { faMinusSquare, faPlusSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//TODO:fontawesomeはhelperにおかない
const minusSquare: React.CSSProperties = {};
const plusSquare: React.CSSProperties = {};
const plus: React.CSSProperties = {};

export const faMinusSquareIcon = <FontAwesomeIcon style={minusSquare} icon={faMinusSquare} className="mr-2" />;
export const faPlusSquareIcon = <FontAwesomeIcon style={plusSquare} icon={faPlusSquare} className="mr-2" />;
export const faPlusIcon = <FontAwesomeIcon style={plus} icon={faPlus} className="mr-2" />;
