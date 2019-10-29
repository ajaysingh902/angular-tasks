import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Compenent1Component } from './compenent1/compenent1.component';
import { Compenent2Component } from './compenent2/compenent2.component';

@NgModule({
  declarations: [
    AppComponent,
    Compenent1Component,
    Compenent2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
