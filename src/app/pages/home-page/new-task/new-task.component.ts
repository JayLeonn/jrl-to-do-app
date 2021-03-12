import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  formGroup = new FormGroup({});

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
  }

  createTask(): void {
    this.storageService.addNewTask({
      taskId: uuidv4(),
      timeStamp: new Date(),
      isChecked: false,
      ...this.formGroup.value.task,
    });
    this.formGroup = new FormGroup({});
  }
}
