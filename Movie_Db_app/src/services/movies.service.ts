import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IMovie from 'src/app/models/IMovie';
import { Observable } from 'rxjs';

const BASE_URL: string = "https://api.themoviedb.org/3/"
const API_KEY: string = "&api_key=755af1a90842399633295190438d4a06";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  popularEndPoint = 'discover/movie?sort_by=popularity.desc';
  theatersEndPoint = 'discover/movie?primary_release_date.gte=2018-07-15&primary_release_date.lte=2019-02-01';

  constructor(private http: HttpClient) {

  }

  getPopular(): Observable<Array<IMovie>> {
    return this.http.get<IMovie[]>(BASE_URL + this.popularEndPoint + API_KEY);
  }

  getTheaters(): Observable<Array<IMovie>> {
    return this.http.get<IMovie[]>(BASE_URL + this.theatersEndPoint + API_KEY);
  }

}
