import {
  Mail,
  CalendarDays,
  MessageSquare,
  Video,
  CalendarCheck,
  NotebookText,
  ListTodo,
  Trello,
  KanbanSquare,
  Building2,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { trustBar } from "@/config/content";

const iconMap: Record<string, LucideIcon> = {
  workspace: Building2,
  gmail: Mail,
  gcal: CalendarDays,
  outlook: Mail,
  slack: MessageSquare,
  zoom: Video,
  calendly: CalendarCheck,
  notion: NotebookText,
  clickup: ListTodo,
  trello: Trello,
  asana: KanbanSquare,
  m365: Building2,
};

export function TrustBar() {
  return (
    <section className="border-y border-border/70 bg-secondary/40 py-12">
      <div className="container">
        <Reveal>
          <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {trustBar.eyebrow}
          </p>
        </Reveal>
        <div className="grid grid-cols-3 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
          {trustBar.tools.map((tool, index) => {
            const Icon = iconMap[tool.icon] ?? Building2;
            return (
              <Reveal key={tool.name} delay={index * 0.03}>
                <div className="group flex flex-col items-center gap-2 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                  <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-accent-500" />
                  <span className="text-center text-xs font-medium text-muted-foreground">
                    {tool.name}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
