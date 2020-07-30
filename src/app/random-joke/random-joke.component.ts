import { Component, OnInit } from '@angular/core';
import { JokeService } from '../shared/joke.service';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.css']
})
export class RandomJokeComponent {

  randomJoke$ = this.jokeService.randomJoke$;

  constructor(private jokeService: JokeService) { }
 
}
