import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-800 hidden sm:block">Dashboard Geral</h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">Ricardo Mendes</p>
            <p className="text-xs text-gray-500">Tech Lead</p>
          </div>
          <img 
            src="https://picsum.photos/200/200?random=10" 
            alt="User Profile" 
            className="w-9 h-9 rounded-full border-2 border-white shadow-sm cursor-pointer hover:border-blue-200 transition-all" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;