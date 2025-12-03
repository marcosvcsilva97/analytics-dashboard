import React from 'react';
import { Chart } from 'react-google-charts';

// --- Combo Chart (Line + Bar) ---
interface ComboChartProps {
  title: string;
  data: (string | number)[][];
}

export const ComboChartWidget: React.FC<ComboChartProps> = ({ title, data }) => {
  const options = {
    title: '', // We use custom HTML titles for better styling
    seriesType: 'bars',
    series: { 1: { type: 'line', pointSize: 5 } }, // Series 1 (Budget) is line
    colors: ['#0891b2', '#f59e0b'], // Cyan (Actual), Amber (Budget)
    legend: { position: 'top', alignment: 'end' },
    chartArea: { width: '85%', height: '70%' },
    vAxis: { 
        textStyle: { color: '#6b7280', fontSize: 11 },
        gridlines: { color: '#f3f4f6' }
    },
    hAxis: { 
        textStyle: { color: '#6b7280', fontSize: 11 },
    },
    animation: {
        startup: true,
        duration: 1000,
        easing: 'out',
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-gray-800 text-base">{title}</h3>
        <div className="flex gap-3 text-xs">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-cyan-600 rounded-sm"></span>
            <span className="text-gray-500">Actual</span>
          </div>
          <div className="flex items-center gap-1">
             <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            <span className="text-gray-500">Budget</span>
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-[200px]">
        <Chart
          chartType="ComboChart"
          width="100%"
          height="100%"
          data={data}
          options={{ ...options, legend: 'none' }} // Hide default legend to use custom one
        />
      </div>
    </div>
  );
};

// --- Gauge Chart ---
interface GaugeChartProps {
  title: string;
  value: number;
  data: (string | number)[][];
}

export const GaugeWidget: React.FC<GaugeChartProps> = ({ title, value, data }) => {
    // Gauges in Google Charts are a bit quirky with resizing, so we might stick to a simpler donut for "73%" style if Gauge looks bad,
    // but the user asked for "diversos gráficos" and gauges are specific. 
    // However, the standard Google Gauge is the speedometer style. 
    // The image requested likely had "Donut" charts with a percentage in the middle.
    // Let's implement a Donut chart that looks like a Gauge (Progress Ring).

    const donutData = [
        ['Type', 'Value'],
        ['Completed', value],
        ['Remaining', 100 - value],
    ];

    const options = {
        pieHole: 0.75,
        pieSliceText: 'none',
        legend: 'none',
        colors: ['#0891b2', '#e5e7eb'], // Cyan vs Gray
        tooltip: { trigger: 'none' },
        chartArea: { width: '90%', height: '90%' },
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-center relative h-full">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide absolute top-4">{title}</h4>
            <div className="w-full h-[120px] relative">
                 <Chart
                    chartType="PieChart"
                    width="100%"
                    height="100%"
                    data={donutData}
                    options={options}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-1">
                    <span className="text-xl font-bold text-cyan-700">{value}%</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full mt-2 text-center text-xs">
                <div className="bg-cyan-50 p-1 rounded">
                    <span className="block font-bold text-cyan-700">12k</span>
                    <span className="text-cyan-600/70">Actual</span>
                </div>
                <div className="bg-gray-50 p-1 rounded">
                    <span className="block font-bold text-gray-600">15k</span>
                    <span className="text-gray-400">Buget</span>
                </div>
            </div>
        </div>
    );
};


// --- Stacked Bar / Grouped Bar Chart ---
interface BarChartProps {
  title: string;
  data: (string | number)[][];
  colors?: string[];
}

export const BarChartWidget: React.FC<BarChartProps> = ({ title, data, colors = ['#0891b2', '#f59e0b'] }) => {
  const options = {
    chartArea: { width: '85%', height: '70%' },
    colors: colors,
    legend: { position: 'top', alignment: 'end' },
    bar: { groupWidth: '60%' },
    vAxis: { 
        textStyle: { color: '#6b7280', fontSize: 11 },
        gridlines: { color: '#f3f4f6' }
    },
    hAxis: { 
        textStyle: { color: '#6b7280', fontSize: 11 }
    },
    animation: {
        startup: true,
        duration: 800,
        easing: 'out',
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 h-full flex flex-col">
       <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-gray-800 text-base">{title}</h3>
      </div>
      <div className="flex-1 min-h-[200px]">
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

// --- Simple Column Chart for Department Comparison ---
export const DepartmentColumnChart: React.FC<{ data: (string | number | object)[][] }> = ({ data }) => {
     const options = {
        legend: 'none',
        bar: { groupWidth: '40%' },
        chartArea: { width: '90%', height: '80%' },
        vAxis: { gridlines: { count: 0 }, textPosition: 'none' },
        hAxis: { textStyle: { fontSize: 10, color: '#4b5563' } },
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 h-full">
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="100%"
                data={data}
                options={options}
            />
             <div className="flex justify-between text-[10px] text-gray-500 px-2 mt-[-10px]">
                 <span>Board</span>
                 <span>Finance</span>
                 <span>Admin</span>
             </div>
        </div>
    )
}
