export interface Project {
  id: string;
  name: string;
  description?: string;

  status: 'active' | 'completed' | 'on-hold';

  progress: number; // 0–100

  startDate: Date;
  endDate?: Date;

  membersCount: number;

  createdAt: Date;
}
