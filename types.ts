export interface KPIMetric {
  id: string;
  label: string;
  value: string | number;
  subValue?: string;
  trend: number; // percentage
  trendDirection: 'up' | 'down' | 'neutral';
  iconName: string;
  colorClass?: string;
}

export interface FinancialItem {
  project: string;
  actual: number;
  budget: number;
}

export interface SegmentData {
  title: string;
  items: FinancialItem[];
}

export interface MonthlyPerformance {
  month: string;
  concluidas: number;
  pendentes: number;
  novas: number;
}

export interface TaskStatusDistribution {
  name: string;
  value: number;
  color: string;
}

export interface TeamMemberPerformance {
  name: string;
  role: string;
  tasksCompleted: number;
  efficiency: number; // 0-100
  avatarUrl: string;
}

export interface RecentActivity {
  id: string;
  action: string;
  project: string;
  time: string;
  user: string;
}
