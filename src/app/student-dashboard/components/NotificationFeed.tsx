import React from 'react';
import { CheckCircle, AlertCircle, Bell, Calendar, MessageSquare } from 'lucide-react';

const notifications = [
  { id: 'notif-001', type: 'success', icon: <CheckCircle size={14} />, title: 'Application Shortlisted', desc: 'Karnataka Rajyotsava Scholarship — you have been shortlisted!', time: '2h ago', unread: true },
  { id: 'notif-002', type: 'warning', icon: <Calendar size={14} />, title: 'Deadline in 5 days', desc: 'Indira Gandhi Single Girl Child Scholarship closes on 28 Sep.', time: '4h ago', unread: true },
  { id: 'notif-003', type: 'info', icon: <MessageSquare size={14} />, title: 'Document Requested', desc: 'AICTE Pragati Scholarship needs your updated income certificate.', time: '1d ago', unread: true },
  { id: 'notif-004', type: 'danger', icon: <AlertCircle size={14} />, title: 'Document Rejected', desc: 'Your bank passbook upload was rejected. Please re-upload.', time: '2d ago', unread: false },
  { id: 'notif-005', type: 'success', icon: <CheckCircle size={14} />, title: 'New Match Found', desc: '3 new scholarships match your updated profile.', time: '3d ago', unread: false },
];

const typeColor: Record<string, string> = {
  success: 'text-success bg-success/10',
  warning: 'text-warning bg-warning/10',
  info: 'text-info bg-info/10',
  danger: 'text-danger bg-danger/10',
};

export default function NotificationFeed() {
  return (
    <div className="card h-full">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Bell size={15} className="text-muted-foreground" />
          <h2 className="text-sm font-bold text-foreground">Notifications</h2>
          <span className="badge bg-primary/10 text-primary border-primary/20 text-xs">3 new</span>
        </div>
        <button className="text-xs font-semibold text-primary hover:underline">Mark all read</button>
      </div>
      <div className="divide-y divide-border">
        {notifications.map((n) => (
          <div key={n.id} className={`flex items-start gap-3 px-5 py-3.5 hover:bg-muted/40 transition-colors cursor-pointer ${n.unread ? 'bg-primary/3' : ''}`}>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${typeColor[n.type]}`}>
              {n.icon}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="text-xs font-bold text-foreground">{n.title}</p>
                {n.unread && <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1" />}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{n.desc}</p>
              <p className="text-xs text-muted-foreground/60 mt-1">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}