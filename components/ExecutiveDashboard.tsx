"use client";

import React, { useState, useMemo } from "react";
import { 
  Star, 
  Clock, 
  CheckCircle2, 
  Circle, 
  Mail, 
  RefreshCw, 
  BellRing, 
  Settings2, 
  X, 
  StickyNote, 
  LayoutDashboard, 
  KanbanSquare, 
  CalendarDays, 
  Inbox as InboxIcon, 
  Phone, 
  Zap, 
  Sparkles 
} from "lucide-react";

interface Suggestion {
  id: string;
  icon: any;
  tone: "rose" | "amber" | "slate";
  text: string;
  action: string;
  onAction: () => void;
}

const initialTasks: Array<{
  id: string;
  title: string;
  status: string;
  priority: string;
  owner: string;
  due: number;
  category: string;
}> = [
  { id: "t1", title: "Prepare Board Meeting Agenda", status: "in-progress", priority: "high", owner: "AR", due: 1, category: "Executive Support" },
  { id: "t2", title: "Organize Executive Travel – NYC Trip", status: "todo", priority: "high", owner: "AR", due: 3, category: "Travel" },
  { id: "t3", title: "Review Vendor Contract – Cloud Services", status: "waiting", priority: "medium", owner: "AR", due: 2, category: "Operations" },
  { id: "t4", title: "Draft Q3 All-Hands Presentation", status: "in-progress", priority: "high", owner: "AR", due: 4, category: "Communications" },
  { id: "t5", title: "Reconcile Q2 Expense Reports", status: "todo", priority: "low", owner: "AR", due: 7, category: "Finance" },
  { id: "t6", title: "Coordinate Offsite Venue & Catering", status: "backlog", priority: "medium", owner: "AR", due: 12, category: "Operations" },
  { id: "t7", title: "Update Onboarding Checklist", status: "backlog", priority: "low", owner: "AR", due: 9, category: "HR" },
  { id: "t8", title: "Send Weekly Report to Leadership", status: "done", priority: "medium", owner: "AR", due: -1, category: "Communications" },
  { id: "t9", title: "File Signed NDA with Legal", status: "done", priority: "low", owner: "AR", due: -3, category: "Operations" },
];

const initialEmails: Array<{
  id: string;
  sender: string;
  subject: string;
  snippet: string;
  time: string;
  vip: boolean;
  status: string;
}> = [
  { id: "e1", sender: "CEO Office", subject: "Board Deck Review", snippet: "Please check slides 4-8 before tomorrow's call...", time: "10:14 AM", vip: true, status: "needs-reply" },
  { id: "e2", sender: "CFO", subject: "Q3 Budget adjustments", snippet: "We need to reallocate some funds for travel...", time: "9:30 AM", vip: true, status: "needs-reply" },
  { id: "e3", sender: "HR Director", subject: "Candidate Feedback", snippet: "Feedback on the senior product manager interview.", time: "Yesterday", vip: false, status: "read" },
];

const initialCalls: Array<{
  id: string;
  caller: string;
  company: string;
  topic: string;
  day: string;
  time: string;
}> = [
  { id: "c1", caller: "Marcus Vance", company: "Vance Partners", topic: "Partnership terms", day: "Today", time: "2:00 PM" },
  { id: "c2", caller: "Sarah Jenkins", company: "Apex Corp", topic: "Quarterly alignment", day: "Tomorrow", time: "11:30 AM" },
];

const initialAgenda: Array<{
  id: string;
  title: string;
  time: string;
  type: string;
}> = [
  { id: "a1", title: "Executive Alignment", time: "9:00 AM - 10:00 AM", type: "meeting" },
  { id: "a2", title: "Deep Work: Strategy Draft", time: "10:30 AM - 12:00 PM", type: "focus" },
];

const statusColumns = [
  { key: "todo", label: "To Do" },
  { key: "in-progress", label: "In Progress" },
  { key: "waiting", label: "Waiting Review" },
  { key: "done", label: "Completed" },
];

const priorityStyle: Record<string, { dot: string; text: string; bg: string; label: string }> = {
  high: { dot: "bg-rose-500", text: "text-rose-700", bg: "bg-rose-50", label: "High" },
  medium: { dot: "bg-amber-500", text: "text-amber-700", bg: "bg-amber-50", label: "Medium" },
  low: { dot: "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50", label: "Low" },
};

function priorityScore(task: { priority?: string; due?: number }): number {
  const dueTime = task.due ?? 0;
  const base = task.priority === "high" ? 3 : task.priority === "medium" ? 2 : 1;
  const soon = dueTime <= 2 ? 1 : 0;
  return base + soon;
}

export default function ExecutiveOpsDashboard() {
  const [tab, setTab] = useState<string>("overview");
  const [tasks, setTasks] = useState(initialTasks);
  const [emails, setEmails] = useState(initialEmails);
  const [calls, setCalls] = useState(initialCalls);
  const [agenda, setAgenda] = useState(initialAgenda);
  const [dismissed, setDismissed] = useState<string[]>([]);
  const [emailFilter, setEmailFilter] = useState<string>("all");
  const [dragTaskId, setDragTaskId] = useState<string | null>(null);

  const openTasks = tasks.filter((t) => t.status !== "done").length;
  const meetingsToday = calls.filter((c) => c.day === "Today").length;
  const emailsNeedingReply = emails.filter((e) => e.status === "needs-reply").length;
  const callsThisWeek = calls.length;

  const suggestions = useMemo(() => {
    const list: Suggestion[] = [];
    const rules = { vipFlag: true };

    if (rules.vipFlag) {
      const vipUnreplied = emails.filter((e) => e.vip && e.status === "needs-reply");
      vipUnreplied.forEach((e) => {
        list.push({
          id: `vip-${e.id}`,
          icon: Star,
          tone: "rose",
          text: `${e.sender} is waiting on a reply – flagged VIP`,
          action: "Mark handled",
          onAction: () => markEmail(e.id, "handled"),
        });
      });
    }
    return list;
  }, [emails]);

  function markEmail(id: string, newStatus: string) {
    setEmails(emails.map((e) => (e.id === id ? { ...e, status: newStatus } : e)));
  }

  return (
    <div className="p-6 max-w-7xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4">Executive Dashboard</h1>
      <p className="text-gray-600 mb-6">Overview of operational metrics and tasks.</p>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-white rounded shadow">Open Tasks: {openTasks}</div>
        <div className="p-4 bg-white rounded shadow">Meetings Today: {meetingsToday}</div>
        <div className="p-4 bg-white rounded shadow">Emails Needing Reply: {emailsNeedingReply}</div>
        <div className="p-4 bg-white rounded shadow">Calls This Week: {callsThisWeek}</div>
      </div>
    </div>
  );
}