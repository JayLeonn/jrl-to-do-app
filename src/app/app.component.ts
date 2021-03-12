import { StorageService } from './services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private storageService: StorageService) {}

  ngOnInit() {
    /* Init browser storage with empty array */
    this.storageService.setTasksToStorage([]);
  }
}
