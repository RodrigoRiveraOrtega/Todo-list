import { Component } from '@angular/core';
import {TaskService} from './task/task.service';
import {Observable} from 'rxjs/Rx';

import '../assets/css/styles.css';
import { Task } from './task/task.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks: Task[];

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
     this._taskService.getTasks().subscribe(
        data => this.tasks = data,
        err => console.error(err),
        () => console.log('done loading tasks')
     );
  }
 
  constructor(private _taskService: TaskService) { }
}