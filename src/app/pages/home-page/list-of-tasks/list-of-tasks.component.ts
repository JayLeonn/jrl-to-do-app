import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.css']
})
export class ListOfTasksComponent implements OnInit {

  constructor(public storageService: StorageService) { }

  ngOnInit(): void {
    this.storageService.getStorageItems();
    console.log(this.storageService.tasks);
  }

}
