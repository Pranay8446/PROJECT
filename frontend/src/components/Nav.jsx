import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'lucide-react';
import SidebarMenu from './SidebarMenu';

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full min-h-16 bg-black flex justify-between items-center px-10 z-50">
        <img
          className="h-10 w-10"
          src="https://imgs.search.brave.com/BAq5xttdV3CggAlkrBA3NWQAiz2Sd9x1XanMNqHhcWY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9Qcm9m/aWxlLVBORy1GaWxl/LnBuZw"
          alt="Logo"
        />

        <nav className="flex items-center justify-between bg-gray-300">
          <ul className="hidden md:flex gap-3">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
          </ul>
        </nav>

        <div className="block md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-white"
          >
            <Menu className="text-white" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <SidebarMenu isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default Nav;
