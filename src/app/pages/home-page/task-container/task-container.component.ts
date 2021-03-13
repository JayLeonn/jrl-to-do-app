import { Task } from './../../../models/task.interface';
import { Component, Input, OnInit } from '@angular/core';
import { TaskCategoryType } from 'src/app/models';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css'],
})
export class TaskContainerComponent implements OnInit {
  @Input() task: Task | undefined;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  deleteTask(): void {
    if (this.task) {
      this.storageService.deleteTask(this.task);
    }
  }

  updateTask(): void {
    if (this.task) {
      this.storageService.updateTaskStatus(this.task);
    }
  }

  get TaskCategoryType(): typeof TaskCategoryType {
    return TaskCategoryType;
  }
}
