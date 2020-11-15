import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListmaterielComponent } from './listmateriel/listmateriel.component';

@NgModule({
  declarations: [
    AppComponent,
    ListmaterielComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
