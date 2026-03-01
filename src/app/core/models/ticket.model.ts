export interface Ticket {
  id: string;
  projectId: string;
  title: string;
  description: string;
  type: 'story' | 'bug' | 'task';
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'in-progress' | 'done';
  assignee: string;
  createdAt: Date;
}
