import { Task } from './../../../models/task.interface';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { TaskCategoryType } from 'src/app/models';

@Component({
  selector: 'app-list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.css'],
})
export class ListOfTasksComponent implements OnInit {
  constructor(public storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.getStorageItems();
    console.log(this.storageService.tasks);
  }

  deleteTask(task: Task): void {
    this.storageService.deleteTask(task);
  }

  updateTask(task: Task): void {
    this.storageService.updateTask(task);
  }

  get TaskCategoryType(): typeof TaskCategoryType {
    return TaskCategoryType;
  }
}
