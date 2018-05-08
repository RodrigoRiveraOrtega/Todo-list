import { Injectable } from '@angular/core';
import { Task } from '../task'
import { TASKS } from '../tasks-store';

@Injectable()
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }
}