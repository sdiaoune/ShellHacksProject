import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactSearchComponent } from './contactsearch.component';
import { AboutComponent } from './about.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    ContactSearchComponent,
    AboutComponent,
    DashboardComponent
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
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]),
    ChartsModule
  ],
  providers: [],
  bootstrap: [HeaderComponent, AppComponent]
})


export class AppModule { }
