import React from 'react';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PrintButton = ({ onClick }) => {
  return (
    <button
      className="text-xl text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faPrint} />
    </button>
  );
};

export default PrintButton;
