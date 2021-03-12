import { Task } from './../../../models/task.interface';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { TaskCategoryType } from 'src/app/models';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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


  drop(event: CdkDragDrop<Task[]>): void {
    const tempArray = this.storageService.tasks;
    moveItemInArray(
      tempArray,
      event.previousIndex,
      event.currentIndex
    );
    this.storageService.setTasksToStorage(tempArray);
  }


}
