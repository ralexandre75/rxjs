import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FromModule } from './operateurs/from/from.module';



import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FromModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
