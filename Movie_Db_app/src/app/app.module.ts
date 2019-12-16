import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './components/movie-related/movie.module';
import { SharedModule } from './components/shared/shared-module';

// import { HeadersComponent } from './components/shared/headers/headers.component';
// import { FootersComponent } from './components/shared/footers/footers.component';
// import { LandingComponent } from './components/shared/landing/landing.component';



@NgModule({
  declarations: [
    AppComponent,
    //all are exported in the module, which they belong, otherwise you`ll have ti import them directly here!
    // HeadersComponent,
    // FootersComponent,
    // LandingComponent,
    // MoviesComponent, these 3 are included in the app module, therefore we don`t need to import them or include them here!
    // MovieComponent,
    // MovieDetailsComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MoviesModule,
    SharedModule
  ],
  //if the services are pointed in the injectable(), then it will work!!!
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
