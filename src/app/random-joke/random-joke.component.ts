import { Component, OnInit } from '@angular/core';
import { JokeService } from '../shared/joke.service';
import { Joke } from '../shared/joke';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.css']
})
export class RandomJokeComponent implements OnInit {

  randomJoke: Joke;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.jokeService.getRandomJoke().subscribe( data => {
      this.randomJoke = data;      
    });
  }

  

}
