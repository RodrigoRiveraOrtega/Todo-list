import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Task } from './task.model';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class TaskService {
 
    constructor(private http:HttpClient) {}
 
    // getTasks() {
    //     return this.http.get('http://localhost:52217/api/tasks');
    // }

    private tasks : Task[];

    getTasks() : Observable<Task[]> {
        this.tasks = [
            {
                name: "Task 1",
                description: "Description 1",
                status: "Done"
            },
            {
                name: "Task 2",
                description: "Description 2",
                status: "Done"
            },
            {
                name: "Task 3",
                description: "Description 3",
                status: "Done"
            }
        ];
        return Observable.of(this.tasks);
    }

    addTask(task : Task){
        this.tasks.push(task);        
    }
}