export interface Task {
  id: string;
  projectId: string;
  ticketId?: string; // optional (if task is linked to a ticket)

  title: string;
  description?: string;

  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';

  assignee: string;

  dueDate?: Date;

  estimatedHours?: number;
  actualHours?: number;

  createdAt: Date;
  updatedAt?: Date;
}
