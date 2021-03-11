import { TaskCategoryType } from './assets/task-category.enum';

export interface Notification {
  taskId: string;
  category: TaskCategoryType;
  timeStamp: string;
  isChecked: boolean;
}
