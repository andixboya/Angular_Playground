import { Component, OnInit, Input, Output } from '@angular/core';
import IMovie from 'src/app/models/IMovie';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private router: Router) { }

  @Output()
  onDetailsEmitter: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  movie: IMovie

  ngOnInit() {
    this.movie.poster_path = "http://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
  }

  clickButton() {
    debugger;
    this.router.navigate(['movies', `${this.movie.id}`])
    //the below is unnecessary for now...
    // this.onDetailsEmitter.emit(this.movie.id);
  }
}
