import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/services/movies.service';
import IMovie from 'src/app/models/IMovie';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],

})
export class MoviesComponent implements OnInit {

  constructor(private movieServices: MoviesService) {
  }


  message: string = null;
  popularMovies: IMovie[];
  theaters: IMovie[];

  ngOnInit() {
    //this is nothing!
    this.movieServices.getPopular().subscribe(data => {
      // debugger
      this.popularMovies = data['results'].slice(0, 6)
      // console.log(data['results'])
    });
    this.movieServices.getTheaters().subscribe(data => {
      this.theaters = data['results'].slice(6, 12)
    });
  }


  //receiver function + the param itself
  fromChild(event) {
    //this is the variable passed from the event, not an object event!
    this.message = event;
  }

}
