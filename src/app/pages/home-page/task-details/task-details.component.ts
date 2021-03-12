import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskCategoryType } from 'src/app/models/enums/task-category.enum';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit, OnChanges {
  @Input() parentForm = this.initFormGroup();
  @Input() groupName = 'task';

  categoryTypes: TaskCategoryType[] = Object.values(TaskCategoryType);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.parentForm.addControl(this.groupName, this.initFormGroup());
  }

  get formGroup(): FormGroup {
    return this.parentForm.get(this.groupName) as FormGroup;
  }

  initFormGroup(): FormGroup {
    return this.fb.group({
      description: ['', Validators.required],
      category: ['', Validators.required],
      dueDate: [new Date(), Validators.required],
    });
  }
}
