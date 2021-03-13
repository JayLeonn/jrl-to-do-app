import { Injectable } from '@angular/core';
import { Task } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storageIdentifier = 'JRL_To_Do_Tasks';
  public tasks: Task[] = []; // Array of tasks that is looped in list of tasks

  constructor() {
    this.getStorageItems();
  }

  /**
   * Add new task to storage
   * @param task To Do Task
   */
  public addNewTask(task: Task): void {
    this.tasks.push(task);
    this.setTasksToStorage(this.tasks);
  }

  /**
   * Set tasks to storage (cant be called outside service)
   * @param tasks Array of To Do Tasks
   */
  public setTasksToStorage(tasks: Task[]): void {
    localStorage.setItem(this.storageIdentifier, JSON.stringify(tasks));
  }

  /**
   * Get tasks from storage with specified ID
   */
  private getStorageItems(): void {
    this.tasks = JSON.parse(
      localStorage.getItem(this.storageIdentifier) || '[]'
    );
  }

  /**
   * Removes the param task from storage and updates storage
   * @param task To Do Task
   */
  public deleteTask(task: Task): void {
    this.tasks = this.tasks.filter((storageTask) => {
      return storageTask !== task;
    });
    this.setTasksToStorage(this.tasks);
  }

  /**
   * Updates task.isChecked (boolean status)
   * @param task To Do Task
   */
  public updateTaskStatus(task: Task): void {
    const idx = this.tasks.findIndex(
      (storageTask) => storageTask.taskId === task.taskId
    );
    this.tasks[idx].isChecked = !task.isChecked;
    this.setTasksToStorage(this.tasks);
  }
}
