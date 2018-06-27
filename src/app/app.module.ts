import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './component/head/head.component';
import { AtComponent } from './at/at.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    AtComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
