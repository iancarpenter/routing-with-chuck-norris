import { Component, OnInit } from '@angular/core';
import { JokeService } from '../shared/joke.service';
import { Joke } from '../shared/joke';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.css']
})
export class RandomJokeComponent implements OnInit {

  randomJoke$: Observable<Joke>;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.randomJoke$ = this.jokeService.getRandomJoke();
  }

}
