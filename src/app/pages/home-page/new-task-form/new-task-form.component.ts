import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskCategoryType } from 'src/app/models/enums/task-category.enum';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css'],
})
export class NewTaskFormComponent implements OnInit, OnChanges {
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
      description: [undefined, Validators.required],
      category: [undefined, Validators.required],
      dueDate: [new Date(), Validators.required],
    });
  }
}
