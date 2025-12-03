import React from 'react';
import { KPIMetric } from '../types';
import { ArrowUpRight, ArrowDownRight, LayoutList, FolderKanban, Zap, Clock, DollarSign, TrendingDown, Activity } from 'lucide-react';

interface StatCardProps {
  metric: KPIMetric;
}

const iconMap: Record<string, React.ElementType> = {
  LayoutList,
  FolderKanban,
  Zap,
  Clock,
  DollarSign,
  TrendingDown,
  Activity
};

const StatCard: React.FC<StatCardProps> = ({ metric }) => {
  const Icon = iconMap[metric.iconName] || LayoutList;
  const isPositive = metric.trendDirection === 'up';
  const isNeutral = metric.trendDirection === 'neutral';

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-lg bg-gray-50`}>
          <Icon className={metric.colorClass || "text-blue-600"} size={24} />
        </div>
        {!isNeutral && (
            <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
            {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
            <span>{Math.abs(metric.trend)}%</span>
            </div>
        )}
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-gray-500 font-medium">{metric.label}</p>
        <h3 className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</h3>
        {metric.subValue && (
            <p className="text-xs text-gray-400 mt-1">{metric.subValue}</p>
        )}
      </div>
    </div>
  );
};

export default StatCard;