import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { PeopleComponent } from './people/people.component';

import { SearchService } from './common/search.service';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
