import { Task } from './../../../models/task.interface';
import { Component, OnInit, OnChanges } from '@angular/core';
import { TaskCategoryType } from 'src/app/models';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home-page-layout',
  templateUrl: './home-page-layout.component.html',
  styleUrls: ['./home-page-layout.component.css'],
})
export class HomePageLayoutComponent implements OnInit {
  constructor(private storageService: StorageService) {}


  ngOnInit(): void {
  }
}
