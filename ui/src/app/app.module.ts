import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DemoService } from './services/demo.service';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, HttpClientModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [DemoService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }