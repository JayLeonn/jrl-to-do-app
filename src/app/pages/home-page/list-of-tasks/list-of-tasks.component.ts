import { Task } from './../../../models/task.interface';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.css'],
})
export class ListOfTasksComponent implements OnInit {
  constructor(public storageService: StorageService) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<Task[]>): void {
    moveItemInArray(
      this.storageService.tasks,
      event.previousIndex,
      event.currentIndex
    );
    this.storageService.setTasksToStorage(this.storageService.tasks);
  }
}
