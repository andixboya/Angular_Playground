import { Component, OnInit, Input, Output } from '@angular/core';
import IMovie from 'src/app/models/IMovie';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  @Output()
  onDetailsEmitter: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  movie: IMovie

  ngOnInit() {
    this.movie.poster_path = "http://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
  }

  clickButton() {
    this.onDetailsEmitter.emit(this.movie.id);
  }
}
