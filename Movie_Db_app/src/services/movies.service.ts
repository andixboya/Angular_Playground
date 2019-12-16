import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IMovie from 'src/app/models/IMovie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import MovieDetails from 'src/app/models/Movie-Details';

const BASE_URL: string = "https://api.themoviedb.org/3/"
const API_KEY: string = "&api_key=755af1a90842399633295190438d4a06";
const API_KEY_ALT: string = "?api_key=755af1a90842399633295190438d4a06";

const POPULAR: string = 'discover/movie?sort_by=popularity.desc';
const IN_THEATERS: string = 'discover/movie?primary_release_date.gte=2018-07-15&primary_release_date.lte=2019-02-01';
//careful with the dashes here, might give you a 404 not found!
const KIDS: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const BEST_DRAMA = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {
  }

  getPopular(): Observable<Array<IMovie>> {
    return this.http.get<IMovie[]>(BASE_URL + POPULAR + API_KEY);
  }

  getTheaters(): Observable<Array<IMovie>> {
    return this.http.get<IMovie[]>(BASE_URL + IN_THEATERS + API_KEY).pipe(
      map(data => data['results'].slice(0, 6))
    );
  }

  getPopularKidsMovies(): Observable<Array<IMovie>> {
    return this.http.get<IMovie[]>(BASE_URL + KIDS + API_KEY).pipe(
      map(data => data['results'].slice(0, 6))
    );
  }

  getBestDramaMovies(): Observable<Array<IMovie>> {
    return this.http.get<IMovie[]>(BASE_URL + BEST_DRAMA + API_KEY).pipe(
      map(data => data['results'].slice(0, 6))
    )
  }

  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  // https://api.themoviedb.org/3/movie/419704&api_key=755af1a90842399633295190438d4
  getMovieById(id: number): Observable<MovieDetails> {

    //problem was here! 
    const fullUrl = BASE_URL + `movie/${id}` + API_KEY_ALT;
    debugger;
    return this.http.get<MovieDetails>(fullUrl);
  }
}
