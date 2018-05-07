import { Component } from '@angular/core';
import {DemoService} from './services/demo.service';
import {Observable} from 'rxjs/Rx';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public welcomeMsg: any;

  ngOnInit() {
    this.welcomeMessage();
  }

  welcomeMessage() {
     this._demoService.getMessages().subscribe(data => { this.welcomeMsg = data},err => console.error(err),
        () => console.log('done loading messages')
     );
  }
 
  constructor(private _demoService: DemoService) { }
}