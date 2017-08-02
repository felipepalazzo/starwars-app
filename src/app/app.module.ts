import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { PeopleComponent } from './people/people.component';

import { SearchService } from './common/search.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchContainerComponent } from './search-container/search-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    PeopleComponent,
    SearchBarComponent,
    SearchContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    SearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
