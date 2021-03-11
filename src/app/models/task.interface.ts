import { TaskCategoryType } from './enums/task-category.enum';

export interface Task {
  /**
   * Identifier for the task
   */
  taskId: string;
  /**
   * Description for the task
   */
  description: string;
  /**
   * Category enum
   */
  category: TaskCategoryType;
  /**
   * Task creation timestamp (ISOstring)
   */
  timeStamp: string;
  /**
   * Task due date (ISOstring)
   */
  dueDate: string;
  /**
   * Task status
   */
  isChecked: boolean;
}
