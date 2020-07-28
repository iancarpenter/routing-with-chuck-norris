import { Component, OnInit } from '@angular/core';
import { JokeService } from '../shared/joke.service';
import { Joke } from '../shared/joke';

@Component({
  selector: 'app-joke-categories',
  templateUrl: './joke-categories.component.html',
  styleUrls: ['./joke-categories.component.css']
})
export class JokeCategoriesComponent implements OnInit {
  
  categories: string[];
  selectedCategory: string;
  categoryJoke: Joke;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.jokeService.getJokeCategories().subscribe(data => {
      this.categories = data;
    });
    // need to add these to a forms drop down component
  }

  getJokeCategory(): void {
    console.log('The cat selected is ' + this.selectedCategory);
    this.jokeService.getRandomJokeFromCategory(this.selectedCategory).subscribe( data => {
      this.categoryJoke = data;
    });
  }

}
