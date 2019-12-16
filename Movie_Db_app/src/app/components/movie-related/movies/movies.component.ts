import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/services/movies.service';
import IMovie from 'src/app/models/IMovie';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],

})
export class MoviesComponent implements OnInit, OnDestroy {

  constructor(private movieServices: MoviesService) {
  }

  message: string = null;
  popularMovies: IMovie[];
  moviesInTheaters: IMovie[];
  popularKidsMovies: IMovie[];
  bestDramaMovies: IMovie[];

  private popularMoviesSub: Subscription;
  private theaterMoviesSub: Subscription;
  private popularKidsMoviesSub: Subscription;
  private dramaMoviesSub: Subscription;


  ngOnInit() {
    //this is nothing!
    this.popularMoviesSub = this.movieServices.getPopular().subscribe(data => {
      
      //this is the other possible option
      this.popularMovies = data['results'].slice(0, 6);
      // console.log(data['results'])
    });

    //the other option is the below shown way! 
    this.theaterMoviesSub = this.movieServices.getTheaters().subscribe(data => {
      this.moviesInTheaters = data;
    });

    this.popularKidsMoviesSub = this.movieServices.getPopularKidsMovies().subscribe(data => {
      this.popularKidsMovies = data;
    })

    this.dramaMoviesSub = this.movieServices.getBestDramaMovies().subscribe(data => {
      this.bestDramaMovies = data;
    })
  }

  ngOnDestroy(): void {

    this.theaterMoviesSub.unsubscribe();
    this.popularKidsMoviesSub.unsubscribe();
    this.popularMoviesSub.unsubscribe();
    this.dramaMoviesSub.unsubscribe();
  }



  //receiver function + the param itself
  fromChild(event) {
    //this is the variable passed from the event, not an object event!
    this.message = event;
  }

}
