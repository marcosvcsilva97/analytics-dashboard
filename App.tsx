import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import FinancialTable from './components/FinancialTable';
import { 
    ComboChartWidget, 
    GaugeWidget, 
    BarChartWidget, 
    DepartmentColumnChart 
} from './components/GoogleChartWidgets';

import { 
    KPI_DATA, 
    FINANCIAL_SEGMENT_DATA, 
    ASSET_SEGMENT_DATA,
    BIO_SEGMENT_CHART_DATA,
    OPERATING_SEGMENT_CHART_DATA,
    FLOWER_PORT_DATA,
    DEVELOPMENT_DIVISION_DATA,
    IMPORT_EXPORT_DATA,
    DEPARTMENT_COMPARISON_DATA
} from './constants';
import { DollarSign, Activity, TrendingDown } from 'lucide-react';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Custom KPI Display for this specific dashboard layout
  // We are creating a custom middle section based on the user's reference image style
  const renderKPISSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        {/* KPI 1 */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-bold text-cyan-600 mb-1">189</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Marketing Revenue</p>
            <div className="w-full border-t border-gray-100 my-2"></div>
            <h3 className="text-3xl font-bold text-gray-400 mb-1">0.0</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Budget</p>
        </div>
         {/* KPI 2 (Middle Highlight) */}
         <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <h3 className="text-4xl font-extrabold text-blue-600 mb-2">356</h3>
            <p className="text-sm font-semibold text-gray-600">Finance Costs</p>
        </div>
         {/* KPI 3 */}
         <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-bold text-cyan-600 mb-1">189</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Overhead</p>
            <div className="w-full border-t border-gray-100 my-2"></div>
            <h3 className="text-3xl font-bold text-gray-400 mb-1">0.0</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Budget</p>
        </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden">
      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={sidebarOpen} />

      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'ml-0 md:ml-20 lg:ml-64'}`}>
        
        <Header toggleSidebar={toggleSidebar} />

        <main className="p-4 sm:p-6 space-y-6 max-w-[1920px] mx-auto w-full">
          
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-teal-800">Marketing Dashboard for CEO</h2>
              <p className="text-sm text-gray-500">Visão consolidada de desempenho e orçamento</p>
            </div>
            <div className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                Última atualização: <span className="font-semibold text-gray-700">Hoje, 09:41</span>
            </div>
          </div>

          {/* ROW 1: Financial Segment Table | Custom KPIs | Comparison Bar | Asset Segment Table */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[380px]">
            {/* Left Table */}
            <div className="lg:col-span-3 h-full">
                <FinancialTable title="Financial Segment" data={FINANCIAL_SEGMENT_DATA} />
            </div>

            {/* Middle Section (KPIs + Bar Chart) */}
            <div className="lg:col-span-6 flex flex-col gap-6 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                    <div className="h-full">
                         {renderKPISSection()}
                    </div>
                    <div className="h-full">
                        <DepartmentColumnChart data={DEPARTMENT_COMPARISON_DATA} />
                    </div>
                </div>
            </div>

            {/* Right Table */}
            <div className="lg:col-span-3 h-full">
                 <FinancialTable title="Asset Segment" data={ASSET_SEGMENT_DATA} />
            </div>
          </div>

          {/* ROW 2: Biotechnology Chart | 4 Gauges | Operating Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Biotechnology Segment */}
            <div className="lg:col-span-4 min-h-[300px]">
                 <ComboChartWidget title="Biotechnology Segment" data={BIO_SEGMENT_CHART_DATA} />
            </div>

            {/* 4 Gauges in the Middle */}
            <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                <GaugeWidget title="Operating Profit" value={73} data={[]} />
                <GaugeWidget title="Overhead" value={65} data={[]} />
                <GaugeWidget title="Sales Fee" value={88} data={[]} />
                <GaugeWidget title="Total Profit" value={73} data={[]} />
            </div>

            {/* Operating Segment */}
            <div className="lg:col-span-4 min-h-[300px]">
                <ComboChartWidget title="Operating Segment" data={OPERATING_SEGMENT_CHART_DATA} />
            </div>
          </div>

          {/* ROW 3: Three Bar Charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[300px]">
             <BarChartWidget title="Flower Port Restaurant" data={FLOWER_PORT_DATA} />
             <BarChartWidget title="Development Division" data={DEVELOPMENT_DIVISION_DATA} />
             <BarChartWidget title="Import And Export Companies" data={IMPORT_EXPORT_DATA} />
          </div>

        </main>
      </div>
    </div>
  );
};

export default App;
