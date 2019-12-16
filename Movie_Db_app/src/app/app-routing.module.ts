import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movie-related/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-related/movie-details/movie-details.component';
import { MovieDetailsResolver } from 'src/services/movie-details-resolver';


const routes: Routes = [
  //in case nothing is matched 
  //other pathMatches are prefix 

  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailsComponent, resolve: { movieDetails: MovieDetailsResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}