import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DemoService } from './services/demo.service';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskInfoComponent } from './components/task-info/task-info.component';

@NgModule({
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TaskComponent,
    TaskInfoComponent
  ],
  providers: [DemoService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }