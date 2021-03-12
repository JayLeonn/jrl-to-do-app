import { Injectable } from '@angular/core';
import { Task } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storageIdentifier = 'JRL_To_Do_Tasks';
  public tasks: Task[] = [];

  constructor() {}

  public addNewTask(task: Task): void {
    this.tasks.push(task);
    this.setTasksToStorage(this.tasks);
    this.setTasksToStorage([task]);

  }

  public setTasksToStorage(tasks: Task[]): void {
    localStorage.setItem(this.storageIdentifier, JSON.stringify(tasks));
  }

  public getStorageItems(): void {
    this.tasks = JSON.parse(
      localStorage.getItem(this.storageIdentifier) || '{}'
    );
    console.log(this.tasks);
  }

  public deleteTask(task: Task): void {
    const tempTasks: Task[] = this.tasks.filter((storageTask) => {
      return storageTask !== task;
    });
    this.setTasksToStorage(tempTasks);
    this.getStorageItems();
  }

  public updateTaskStatus(task: Task): void {
    const idx = this.tasks.findIndex(
      (storageTask) => storageTask.taskId === task.taskId
    );
    const tempTasks = this.tasks;
    tempTasks[idx].isChecked = !task.isChecked;
    this.setTasksToStorage(tempTasks);
    this.getStorageItems();
  }
}
