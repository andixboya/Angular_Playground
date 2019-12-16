
import { NgModule } from '@angular/core';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        MovieComponent,
        MovieDetailsComponent,
        MoviesComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [],
    providers: [],
    bootstrap: []
})
export class MoviesModule { }