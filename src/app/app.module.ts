import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactSearchComponent } from './contactsearch.component';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    ContactSearchComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        component: ContactSearchComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [HeaderComponent, AppComponent]
})


export class AppModule { }
