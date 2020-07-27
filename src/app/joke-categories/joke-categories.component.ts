import { Component, OnInit } from '@angular/core';
import { JokeService } from '../shared/joke.service';

@Component({
  selector: 'app-joke-categories',
  templateUrl: './joke-categories.component.html',
  styleUrls: ['./joke-categories.component.css']
})
export class JokeCategoriesComponent implements OnInit {
  
  categories: string[];

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.jokeService.getJokeCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
