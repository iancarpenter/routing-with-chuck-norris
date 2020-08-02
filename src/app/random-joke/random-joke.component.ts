import { Component, OnInit } from '@angular/core';
import { JokeService } from '../shared/joke.service';
import { ActivatedRoute } from '@angular/router';
import { Joke } from '../shared/joke';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.css']
})
export class RandomJokeComponent implements OnInit {

  randomJoke: Joke;

  constructor(private jokeService: JokeService,
              private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    // moved away from the declarative method here because of the use of resolver
    this.route.data.subscribe(data => {
      const resolvedRandomJoke = data['resolvedRandomJoke'];
      this.randomJoke = resolvedRandomJoke;
    });   
  }
           
}
