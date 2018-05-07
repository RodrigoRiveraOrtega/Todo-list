import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task/task.service';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, HttpClientModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [TaskService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }