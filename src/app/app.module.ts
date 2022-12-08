import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './tracks/layout/layout.component';
import { TracklistComponent } from './tracks/tracklist/tracklist.component';
import { TrackformComponent } from './tracks/trackform/trackform.component';
import { HomeComponent } from './tracks/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TracklistComponent,
    TrackformComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
