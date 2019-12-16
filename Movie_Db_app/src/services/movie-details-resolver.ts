import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import MovieDetails from 'src/app/models/Movie-Details';
import { MoviesService } from './movies.service';

@Injectable({
    providedIn: 'root'
})
export class MovieDetailsResolver implements Resolve<MovieDetails>{

    constructor(private movieService: MoviesService) {
    }
    //you don`t add here type, to tell it what it should return, it is understandable from the above generic declaration! 
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //returns an observable, which will be resolved (without our notice!)
        const id = route.params['id'];
        return this.movieService.getMovieById(id);
    }
}