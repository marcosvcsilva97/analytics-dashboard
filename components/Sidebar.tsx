import React from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  LogOut
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
  ];

  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 z-20 bg-slate-900 text-white transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full md:translate-x-0 md:w-20 lg:w-64'}
      `}
    >
      <div className="flex flex-col h-full">
        {/* Logo Area */}
        <div className="flex items-center justify-center h-16 border-b border-slate-800">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white">N</span>
            </div>
            <span className={`lg:block ${isOpen ? 'block' : 'hidden md:hidden'}`}>Nexus</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`
                flex items-center w-full p-3 rounded-lg transition-colors duration-200
                ${item.active 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }
              `}
            >
              <item.icon size={20} className="min-w-[20px]" />
              <span className={`ml-3 font-medium whitespace-nowrap lg:block ${isOpen ? 'block' : 'hidden md:hidden'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Bottom Area */}
        <div className="p-4 border-t border-slate-800">
           <button className="flex items-center w-full p-3 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors">
            <Settings size={20} className="min-w-[20px]" />
            <span className={`ml-3 lg:block ${isOpen ? 'block' : 'hidden md:hidden'}`}>Configurações</span>
          </button>
          <button className="flex items-center w-full p-3 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors mt-1">
            <LogOut size={20} className="min-w-[20px]" />
            <span className={`ml-3 lg:block ${isOpen ? 'block' : 'hidden md:hidden'}`}>Sair</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;