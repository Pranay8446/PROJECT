import React, { useState } from 'react';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarMenu = ({ isOpen, onClose }) => {
  const [showServices, setShowServices] = useState(false);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-black text-white p-6 border-l border-yellow-500 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* Close Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={onClose}>
          <FaTimes className="text-xl" />
        </button>
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        <div className="text-lg font-medium cursor-pointer">
          <Link to={"/service-enquiry"}>Service Enquiry</Link>
        </div>

        {/* Dropdown */}
        <div>
          <div
            className="flex justify-between items-center text-lg font-medium cursor-pointer"
            onClick={() => setShowServices(!showServices)}
          >
            <span>Our Services</span>
            <FaChevronDown className={`transform transition-transform ${showServices ? 'rotate-180' : ''}`} />
          </div>

          {showServices && (
            <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-300">
              <li className="cursor-pointer">Service 1</li>
              <li className="cursor-pointer">Service 2</li>
              <li className="cursor-pointer">Service 3</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
