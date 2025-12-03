import { KPIMetric, FinancialItem, SegmentData, MonthlyPerformance, TaskStatusDistribution, TeamMemberPerformance, RecentActivity } from './types';

// KPI Cards Data - More specific financial/operational metrics
export const KPI_DATA: KPIMetric[] = [
  {
    id: '1',
    label: 'Total Profit',
    value: '189',
    subValue: 'Marketing Revenue',
    trend: 12.5,
    trendDirection: 'up',
    iconName: 'DollarSign',
    colorClass: 'text-emerald-600'
  },
  {
    id: '2',
    label: 'Finance Costs',
    value: '356',
    trend: 8.2,
    trendDirection: 'down',
    iconName: 'TrendingDown',
    colorClass: 'text-red-500'
  },
  {
    id: '3',
    label: 'Overhead',
    value: '189',
    subValue: 'Budget: 0.0',
    trend: 2.1,
    trendDirection: 'neutral',
    iconName: 'Activity',
    colorClass: 'text-blue-600'
  },
];

// Financial Segment Table Data
export const FINANCIAL_SEGMENT_DATA: FinancialItem[] = [
  { project: 'Marketing Revenue', actual: 1280, budget: 1600 },
  { project: 'Costs', actual: 960, budget: 1600 },
  { project: 'Total Profit', actual: 640, budget: 1600 },
  { project: 'Surrendered Funds', actual: 640, budget: 1600 },
];

export const ASSET_SEGMENT_DATA: FinancialItem[] = [
  { project: 'Marketing Revenue', actual: 1450, budget: 1600 },
  { project: 'Costs', actual: 1100, budget: 1600 },
  { project: 'Total Profit', actual: 350, budget: 1600 },
  { project: 'Surrendered Funds', actual: 350, budget: 1600 },
];

// Google Charts Data

// Combo Chart: Biotechnology Segment (Actual vs Budget)
export const BIO_SEGMENT_CHART_DATA = [
  ['Month', 'Actual', 'Budget'],
  ['Jan', 1500, 1000],
  ['Feb', 1200, 1800],
  ['Mar', 1800, 1200],
  ['Apr', 1100, 900],
  ['May', 1600, 1500],
  ['Jun', 1900, 1700],
];

// Combo Chart: Operating Segment
export const OPERATING_SEGMENT_CHART_DATA = [
  ['Month', 'Actual', 'Budget'],
  ['Jan', 1200, 1500],
  ['Feb', 1600, 1700],
  ['Mar', 1100, 1300],
  ['Apr', 900, 1200],
  ['May', 1400, 1600],
  ['Jun', 1550, 1700],
];

// Gauge Data
export const GAUGE_DATA_1 = [['Label', 'Value'], ['Op. Profit', 73]];
export const GAUGE_DATA_2 = [['Label', 'Value'], ['Overhead', 65]];
export const GAUGE_DATA_3 = [['Label', 'Value'], ['Sales Fee', 88]];
export const GAUGE_DATA_4 = [['Label', 'Value'], ['Total', 73]];

// Bar Charts for Departments
export const FLOWER_PORT_DATA = [
  ['Category', 'Actual', 'Budget'],
  ['Op. Profit', 1800, 600],
  ['Cost', 1200, 500],
  ['Overhead', 800, 400],
  ['Total Profit', 1600, 550],
];

export const DEVELOPMENT_DIVISION_DATA = [
  ['Category', 'Actual', 'Budget'],
  ['Op. Profit', 2000, 1000],
  ['Reprod. Costs', 1500, 600],
  ['Surr. Funds', 1000, 500],
  ['Total Profit', 1900, 900],
];

export const IMPORT_EXPORT_DATA = [
  ['Category', 'Actual', 'Budget'],
  ['Op. Profit', 1600, 700],
  ['Cost', 1300, 600],
  ['Overhead', 900, 400],
  ['Total Profit', 1700, 800],
];

// Comparative Bar Chart (Middle Top)
export const DEPARTMENT_COMPARISON_DATA = [
  ['Department', 'Value', { role: 'style' }],
  ['Board of Directors', 55, '#0891b2'], // Cyan 600
  ['Finance Dept', 85, '#f59e0b'], // Amber 500
  ['Administration', 35, '#3b82f6'], // Blue 500
];

// Existing Data (Keeping for potential reuse or activity feed)
export const RECENT_ACTIVITIES: RecentActivity[] = [
  { id: '1', action: 'concluiu a tarefa', project: 'Design System v2', time: '2h atrás', user: 'Ana Silva' },
  { id: '2', action: 'comentou em', project: 'Integração API', time: '4h atrás', user: 'Carlos Oliveira' },
  { id: '3', action: 'moveu card para Done', project: 'Landing Page', time: '5h atrás', user: 'João Santos' },
  { id: '4', action: 'criou nova tarefa', project: 'Marketing Q3', time: '1d atrás', user: 'Marina Costa' },
];
