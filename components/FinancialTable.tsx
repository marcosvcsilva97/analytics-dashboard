import React from 'react';
import { FinancialItem } from '../types';

interface FinancialTableProps {
  title: string;
  data: FinancialItem[];
}

const FinancialTable: React.FC<FinancialTableProps> = ({ title, data }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 h-full flex flex-col">
      <h3 className="font-bold text-gray-800 mb-4 text-base">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-semibold">
              <th className="py-2 px-3 text-left rounded-l-md">Projects</th>
              <th className="py-2 px-3 text-right">Actual</th>
              <th className="py-2 px-3 text-right">Budget</th>
              <th className="py-2 px-3 text-left rounded-r-md w-1/3">Progress</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data.map((item, idx) => {
              const percentage = Math.min((item.actual / item.budget) * 100, 100);
              return (
                <tr key={idx} className="group hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-3 font-medium text-gray-800">{item.project}</td>
                  <td className="py-3 px-3 text-right text-gray-600">{item.actual}</td>
                  <td className="py-3 px-3 text-right text-gray-600">{item.budget}</td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-cyan-600 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialTable;
