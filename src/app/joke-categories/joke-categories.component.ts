import { Component, OnInit } from '@angular/core';
import { JokeService } from '../shared/joke.service';
import { Joke } from '../shared/joke';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-joke-categories',
  templateUrl: './joke-categories.component.html',
  styleUrls: ['./joke-categories.component.css']
})
export class JokeCategoriesComponent {
  
  categories$ = this.jokeService.jokeCategories$;
  selectedCategory: string;
  categoryJoke$: Observable<Joke>;

  constructor(private jokeService: JokeService) { }

  getJokeCategory(): void {    
    this.categoryJoke$ = this.jokeService.getRandomJokeFromCategory(this.selectedCategory);    
  }

}
