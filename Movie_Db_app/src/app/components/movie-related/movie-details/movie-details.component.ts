import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import MovieDetails from 'src/app/models/Movie-Details';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  //here if we add the resolver, we won`t need the service NOR do we need the resolver directly!
  //he is inserted in the ROUTE, so we get it from ACTIVATED ROUTE!
  constructor(private route: ActivatedRoute) { }

  //these should not be private! 
  movie: MovieDetails
  movieGenres: string

  ngOnInit() {

    //we don`t take it from the data, we take it from the SNAPSHOT OF THE DATA!
    // this.route.data['movieDetails']
    //still, it is a SNAPSHOT, NOT observables!
    this.movie = this.route.snapshot.data['movieDetails'];
    // console.log(this.movie)
    // debugger;
    //TODO: this... should be extracted from here, for sure and into the service or resolver 
    this.movie.poster_path = `http://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
    this.movieGenres = this.movie.genres.map(g => g.name).join(', ');
  }
  
  //below is the code which it saves us! 
  //   const id = this.route.snapshot.params['id'];
  //   this.movieService.getMovieById(id).subscribe(movie => {
  //     this.movie = movie;
  //     this.movie.poster_path = `http://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
  //     this.movieGenres = this.movie.genres.map(g => g.name).join(', ');
  //     debugger;
  //   })
  // }
}
