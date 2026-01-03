// Status Page Data Types and Mock Data
// In production, these would be fetched from your backend API

export type ServiceStatus = 'operational' | 'degraded' | 'partial_outage' | 'major_outage' | 'maintenance';

export interface ServiceComponent {
  id: string;
  name: string;
  description: string;
  status: ServiceStatus;
  uptimePercentage: number;
}

export interface Incident {
  id: string;
  title: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'minor' | 'major' | 'critical';
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
  updates: {
    timestamp: string;
    status: string;
    message: string;
  }[];
  affectedComponents: string[];
}

export interface MaintenanceWindow {
  id: string;
  title: string;
  description: string;
  scheduledStart: string;
  scheduledEnd: string;
  status: 'scheduled' | 'in_progress' | 'completed';
  affectedComponents: string[];
}

export interface PlatformStats {
  totalProjects: number;
  totalWorkstreams: number;
  totalTasks: number;
  totalUsers: number;
  tasksCompletedToday: number;
  activeProjects: number;
  // Timestamps for real-time updates
  lastUpdated: string;
}

export interface UptimeDay {
  date: string;
  status: ServiceStatus;
  uptimePercentage: number;
}

// Status display configuration
export const statusConfig: Record<ServiceStatus, { label: string; color: string; bgColor: string; icon: string }> = {
  operational: {
    label: 'Operational',
    color: 'text-green-500',
    bgColor: 'bg-green-500',
    icon: '✓',
  },
  degraded: {
    label: 'Degraded Performance',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500',
    icon: '⚠',
  },
  partial_outage: {
    label: 'Partial Outage',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500',
    icon: '⚡',
  },
  major_outage: {
    label: 'Major Outage',
    color: 'text-red-500',
    bgColor: 'bg-red-500',
    icon: '✕',
  },
  maintenance: {
    label: 'Under Maintenance',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500',
    icon: '🔧',
  },
};

// Mock Data - Replace with API calls in production
// These functions simulate API responses

export const getServiceComponents = (): ServiceComponent[] => [
  {
    id: 'web-app',
    name: 'Web Application',
    description: 'Main CUTO web application',
    status: 'operational',
    uptimePercentage: 99.99,
  },
  {
    id: 'api',
    name: 'API',
    description: 'REST API for integrations',
    status: 'operational',
    uptimePercentage: 99.98,
  },
  {
    id: 'database',
    name: 'Database',
    description: 'Primary database cluster',
    status: 'operational',
    uptimePercentage: 99.99,
  },
  {
    id: 'auth',
    name: 'Authentication',
    description: 'Login and SSO services',
    status: 'operational',
    uptimePercentage: 99.97,
  },
  {
    id: 'notifications',
    name: 'Notifications',
    description: 'Email and push notifications',
    status: 'operational',
    uptimePercentage: 99.95,
  },
  {
    id: 'integrations',
    name: 'Integrations',
    description: 'SAP, Jira, Teams connectors',
    status: 'operational',
    uptimePercentage: 99.92,
  },
  {
    id: 'file-storage',
    name: 'File Storage',
    description: 'Document and attachment storage',
    status: 'operational',
    uptimePercentage: 99.99,
  },
  {
    id: 'reporting',
    name: 'Reporting Engine',
    description: 'Dashboards and reports',
    status: 'operational',
    uptimePercentage: 99.96,
  },
];

export const getOverallStatus = (): ServiceStatus => {
  const components = getServiceComponents();
  
  if (components.some(c => c.status === 'major_outage')) return 'major_outage';
  if (components.some(c => c.status === 'partial_outage')) return 'partial_outage';
  if (components.some(c => c.status === 'degraded')) return 'degraded';
  if (components.some(c => c.status === 'maintenance')) return 'maintenance';
  return 'operational';
};

export const getRecentIncidents = (): Incident[] => [
  {
    id: 'inc-001',
    title: 'Erhöhte Latenzzeiten bei API-Anfragen',
    status: 'resolved',
    severity: 'minor',
    createdAt: '2024-07-18T14:30:00Z',
    updatedAt: '2024-07-18T16:45:00Z',
    resolvedAt: '2024-07-18T16:45:00Z',
    updates: [
      {
        timestamp: '2024-07-18T16:45:00Z',
        status: 'Resolved',
        message: 'Das Problem wurde behoben. Die API-Antwortzeiten sind wieder normal.',
      },
      {
        timestamp: '2024-07-18T15:30:00Z',
        status: 'Monitoring',
        message: 'Ein Fix wurde implementiert. Wir überwachen die Situation.',
      },
      {
        timestamp: '2024-07-18T14:45:00Z',
        status: 'Identified',
        message: 'Das Problem wurde auf einen überlasteten Cache-Server zurückgeführt.',
      },
      {
        timestamp: '2024-07-18T14:30:00Z',
        status: 'Investigating',
        message: 'Wir untersuchen erhöhte Latenzzeiten bei API-Anfragen.',
      },
    ],
    affectedComponents: ['api'],
  },
  {
    id: 'inc-002',
    title: 'Geplante Wartung: Datenbank-Upgrade',
    status: 'resolved',
    severity: 'minor',
    createdAt: '2024-07-15T02:00:00Z',
    updatedAt: '2024-07-15T04:30:00Z',
    resolvedAt: '2024-07-15T04:30:00Z',
    updates: [
      {
        timestamp: '2024-07-15T04:30:00Z',
        status: 'Resolved',
        message: 'Die Wartung wurde erfolgreich abgeschlossen. Alle Services sind wieder verfügbar.',
      },
      {
        timestamp: '2024-07-15T02:00:00Z',
        status: 'In Progress',
        message: 'Die geplante Wartung hat begonnen.',
      },
    ],
    affectedComponents: ['database', 'web-app', 'api'],
  },
];

export const getScheduledMaintenance = (): MaintenanceWindow[] => [
  // No scheduled maintenance currently
];

export const getUptimeHistory = (days: number = 90): UptimeDay[] => {
  const history: UptimeDay[] = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Simulate mostly operational with occasional minor issues
    let status: ServiceStatus = 'operational';
    let uptime = 99.9 + Math.random() * 0.1;
    
    // Add some variation for realism
    if (i === 45) {
      status = 'degraded';
      uptime = 99.5;
    }
    if (i === 72) {
      status = 'maintenance';
      uptime = 98.5;
    }
    
    history.push({
      date: date.toISOString().split('T')[0],
      status,
      uptimePercentage: parseFloat(uptime.toFixed(2)),
    });
  }
  
  return history;
};

// Platform Statistics - These would come from your backend
// The values here are starting points that can animate up
export const getPlatformStats = (): PlatformStats => ({
  totalProjects: 847,
  totalWorkstreams: 12453,
  totalTasks: 284729,
  totalUsers: 3892,
  tasksCompletedToday: 1247,
  activeProjects: 623,
  lastUpdated: new Date().toISOString(),
});

// Simulated real-time updates
// In production, this would be a WebSocket connection or polling
export const subscribeToPlatformStats = (
  callback: (stats: PlatformStats) => void,
  intervalMs: number = 5000
): (() => void) => {
  let currentStats = getPlatformStats();
  
  const interval = setInterval(() => {
    // Simulate real-time changes
    currentStats = {
      ...currentStats,
      totalTasks: currentStats.totalTasks + Math.floor(Math.random() * 5),
      tasksCompletedToday: currentStats.tasksCompletedToday + Math.floor(Math.random() * 3),
      activeProjects: currentStats.activeProjects + (Math.random() > 0.8 ? 1 : 0),
      lastUpdated: new Date().toISOString(),
    };
    callback(currentStats);
  }, intervalMs);
  
  // Return cleanup function
  return () => clearInterval(interval);
};

// Calculate overall uptime percentage
export const calculateOverallUptime = (): number => {
  const components = getServiceComponents();
  const total = components.reduce((sum, c) => sum + c.uptimePercentage, 0);
  return parseFloat((total / components.length).toFixed(2));
};

