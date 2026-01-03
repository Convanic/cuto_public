'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { 
  CheckCircle2, AlertTriangle, XCircle, Clock, RefreshCw, 
  Activity, Database, Globe, Shield, Bell, Link2, HardDrive, BarChart3,
  Users, FolderKanban, ListTodo, Layers, ArrowRight, Zap
} from 'lucide-react';
import {
  getServiceComponents,
  getOverallStatus,
  getRecentIncidents,
  getScheduledMaintenance,
  getUptimeHistory,
  getPlatformStats,
  subscribeToPlatformStats,
  calculateOverallUptime,
  statusConfig,
  ServiceComponent,
  PlatformStats,
  UptimeDay,
} from '@/lib/status';
import AnimatedSection from '@/components/AnimatedSection';

// Animated Counter Component with real-time updates
function AnimatedCounter({ 
  value, 
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
}: { 
  value: number; 
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);
  const previousValue = useRef(value);
  
  // Initial animation when coming into view
  useEffect(() => {
    if (!isInView) return;
    
    const startValue = 0;
    const endValue = value;
    const startTime = Date.now();
    const durationMs = duration * 1000;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, duration]);
  
  // Smooth transition for real-time updates after initial animation
  useEffect(() => {
    if (!isInView) return;
    if (previousValue.current === value) return;
    
    const startValue = displayValue;
    const endValue = value;
    const startTime = Date.now();
    const durationMs = 500; // Quick transition for updates
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easeOut = 1 - Math.pow(1 - progress, 2);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
      
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
    previousValue.current = value;
  }, [value, isInView, displayValue]);
  
  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue.toLocaleString('de-DE')}{suffix}
    </span>
  );
}

// Status Icon Component
function StatusIcon({ status }: { status: string }) {
  const config = statusConfig[status as keyof typeof statusConfig];
  
  const icons = {
    operational: <CheckCircle2 className={`w-5 h-5 ${config.color}`} />,
    degraded: <AlertTriangle className={`w-5 h-5 ${config.color}`} />,
    partial_outage: <AlertTriangle className={`w-5 h-5 ${config.color}`} />,
    major_outage: <XCircle className={`w-5 h-5 ${config.color}`} />,
    maintenance: <Clock className={`w-5 h-5 ${config.color}`} />,
  };
  
  return icons[status as keyof typeof icons] || <CheckCircle2 className="w-5 h-5 text-gray-400" />;
}

// Component Icon mapping
const componentIcons: Record<string, typeof Activity> = {
  'web-app': Globe,
  'api': Activity,
  'database': Database,
  'auth': Shield,
  'notifications': Bell,
  'integrations': Link2,
  'file-storage': HardDrive,
  'reporting': BarChart3,
};

// Uptime Bar Component
function UptimeBar({ history }: { history: UptimeDay[] }) {
  return (
    <div className="flex gap-0.5">
      {history.slice(-90).map((day, index) => {
        const config = statusConfig[day.status];
        return (
          <div
            key={day.date}
            className="group relative"
          >
            <div
              className={`w-1 h-8 rounded-sm ${config.bgColor} opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}
              title={`${day.date}: ${day.uptimePercentage}%`}
            />
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10">
              <div className="bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                <div className="font-semibold">{day.date}</div>
                <div>{day.uptimePercentage}% uptime</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function StatusPage() {
  const [components, setComponents] = useState<ServiceComponent[]>([]);
  const [overallStatus, setOverallStatus] = useState<string>('operational');
  const [uptimeHistory, setUptimeHistory] = useState<UptimeDay[]>([]);
  const [platformStats, setPlatformStats] = useState<PlatformStats | null>(null);
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Initial data load
  useEffect(() => {
    setComponents(getServiceComponents());
    setOverallStatus(getOverallStatus());
    setUptimeHistory(getUptimeHistory(90));
    setPlatformStats(getPlatformStats());
  }, []);
  
  // Subscribe to real-time stats updates
  useEffect(() => {
    const unsubscribe = subscribeToPlatformStats((stats) => {
      setPlatformStats(stats);
    }, 5000); // Update every 5 seconds
    
    return unsubscribe;
  }, []);
  
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setComponents(getServiceComponents());
      setOverallStatus(getOverallStatus());
      setLastRefresh(new Date());
      setIsRefreshing(false);
    }, 500);
  };
  
  const incidents = getRecentIncidents();
  const scheduledMaintenance = getScheduledMaintenance();
  const overallUptime = calculateOverallUptime();
  const statusConfigData = statusConfig[overallStatus as keyof typeof statusConfig];
  
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection animation="fade-in-up">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Activity className="w-4 h-4" />
              System Status
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              CUTO Status
            </h1>
            
            {/* Overall Status */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${statusConfigData?.bgColor} bg-opacity-20 border-2 ${statusConfigData?.color.replace('text-', 'border-')}`}
            >
              <StatusIcon status={overallStatus} />
              <span className={`text-lg font-semibold ${statusConfigData?.color}`}>
                {statusConfigData?.label || 'All Systems Operational'}
              </span>
            </motion.div>
            
            <p className="text-white/70 mt-4 text-sm">
              Letztes Update: {lastRefresh.toLocaleTimeString('de-DE')}
              <button
                onClick={handleRefresh}
                className="ml-2 inline-flex items-center gap-1 text-white/60 hover:text-white transition-colors"
                disabled={isRefreshing}
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              </button>
            </p>
          </div>
        </AnimatedSection>
      </section>
      
      {/* Live Platform Statistics */}
      {platformStats && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in-up" delay={0.1}>
              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#952494]" />
                    Live Platform Statistiken
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Live
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-[#952494]/10 to-[#FA9B0C]/10 rounded-xl">
                    <FolderKanban className="w-8 h-8 text-[#952494] mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-900">
                      <AnimatedCounter value={platformStats.totalProjects} />
                    </div>
                    <div className="text-sm text-gray-500">Projekte</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-[#952494]/10 to-[#FA9B0C]/10 rounded-xl">
                    <Layers className="w-8 h-8 text-[#952494] mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-900">
                      <AnimatedCounter value={platformStats.totalWorkstreams} />
                    </div>
                    <div className="text-sm text-gray-500">Workstreams</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-[#952494]/10 to-[#FA9B0C]/10 rounded-xl">
                    <ListTodo className="w-8 h-8 text-[#952494] mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-900">
                      <AnimatedCounter value={platformStats.totalTasks} />
                    </div>
                    <div className="text-sm text-gray-500">Aufgaben</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-[#952494]/10 to-[#FA9B0C]/10 rounded-xl">
                    <Users className="w-8 h-8 text-[#952494] mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-900">
                      <AnimatedCounter value={platformStats.totalUsers} />
                    </div>
                    <div className="text-sm text-gray-500">Benutzer</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl">
                    <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-green-600">
                      <AnimatedCounter value={platformStats.tasksCompletedToday} />
                    </div>
                    <div className="text-sm text-gray-500">Erledigt heute</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl">
                    <Activity className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-blue-600">
                      <AnimatedCounter value={platformStats.activeProjects} />
                    </div>
                    <div className="text-sm text-gray-500">Aktive Projekte</div>
                  </div>
                </div>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  Statistiken werden alle 5 Sekunden aktualisiert • Letzte Aktualisierung: {new Date(platformStats.lastUpdated).toLocaleTimeString('de-DE')}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
      
      {/* Uptime Overview */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Uptime der letzten 90 Tage</h2>
                  <p className="text-sm text-gray-500">
                    Gesamtverfügbarkeit: <span className="font-semibold text-green-500">{overallUptime}%</span>
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded bg-green-500"></span>
                    Operational
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded bg-yellow-500"></span>
                    Degraded
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded bg-blue-500"></span>
                    Maintenance
                  </span>
                </div>
              </div>
              
              <UptimeBar history={uptimeHistory} />
              
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>90 Tage</span>
                <span>Heute</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Service Components */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.3}>
            <h2 className="text-2xl font-bold text-white mb-6">Service-Komponenten</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {components.map((component, index) => {
                const IconComponent = componentIcons[component.id] || Activity;
                const config = statusConfig[component.status];
                
                return (
                  <motion.div
                    key={component.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-xl p-5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{component.name}</h3>
                          <p className="text-sm text-gray-500">{component.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`flex items-center gap-2 ${config.color}`}>
                          <StatusIcon status={component.status} />
                          <span className="font-medium">{config.label}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{component.uptimePercentage}% uptime</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Recent Incidents */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.4}>
            <h2 className="text-2xl font-bold text-white mb-6">Vergangene Incidents</h2>
            
            {incidents.length > 0 ? (
              <div className="space-y-4">
                {incidents.map((incident) => (
                  <div key={incident.id} className="glass-card rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">{incident.title}</h3>
                        <p className="text-sm text-gray-500">
                          {new Date(incident.createdAt).toLocaleDateString('de-DE', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        incident.status === 'resolved' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {incident.status === 'resolved' ? 'Resolved' : incident.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      {incident.updates.slice(0, 2).map((update, i) => (
                        <div key={i} className="flex gap-3 text-sm">
                          <span className="text-gray-400 whitespace-nowrap">
                            {new Date(update.timestamp).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
                          </span>
                          <span className="font-medium text-gray-700">{update.status}:</span>
                          <span className="text-gray-600">{update.message}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="glass-card rounded-xl p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Keine Incidents</h3>
                <p className="text-gray-500">In den letzten 90 Tagen gab es keine nennenswerten Vorfälle.</p>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
      
      {/* Scheduled Maintenance */}
      {scheduledMaintenance.length > 0 && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in-up" delay={0.5}>
              <h2 className="text-2xl font-bold text-white mb-6">Geplante Wartungen</h2>
              
              <div className="space-y-4">
                {scheduledMaintenance.map((maintenance) => (
                  <div key={maintenance.id} className="glass-card rounded-xl p-6 border-l-4 border-blue-500">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{maintenance.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{maintenance.description}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {new Date(maintenance.scheduledStart).toLocaleString('de-DE')} - {new Date(maintenance.scheduledEnd).toLocaleString('de-DE')}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Geplant
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
      
      {/* Subscribe CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection animation="fade-in-up">
          <div className="max-w-3xl mx-auto glass-card rounded-3xl p-10">
            <Bell className="w-12 h-12 text-[#952494] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Status-Updates erhalten
            </h2>
            <p className="text-gray-600 mb-8">
              Werden Sie sofort benachrichtigt, wenn es Störungen oder geplante Wartungen gibt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#952494] text-white rounded-xl font-semibold hover:bg-[#7a1d7a] transition-colors">
                Updates abonnieren
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Support kontaktieren
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}

