import { Component } from '@angular/core';
import {DemoService} from './services/demo.service';
import {Observable} from 'rxjs/Rx';
import { Task } from './task';
import { TaskService } from './services/task.service';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService]
})
export class AppComponent {
  public welcomeMsg: any;
  tasks:Task[];
  selectedTask:Task;

  ngOnInit() {
    this.welcomeMessage();
    this.tasks = this.taskService.getTasks();
  }

  welcomeMessage() {
     this._demoService.getMessages().subscribe(data => { this.welcomeMsg = data},err => console.error(err),
        () => console.log('done loading messages')
     );
  }
  onSelect(task:Task): void{
    this.selectedTask = task;
  }  
 
  constructor(private _demoService: DemoService, private taskService:TaskService) { }
}