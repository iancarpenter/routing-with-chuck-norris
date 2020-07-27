import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  randomJokeURL = 'https://api.chucknorris.io/jokes/random';
  jokeCategoriesURL = 'https://api.chucknorris.io/jokes/categories';  

  constructor(private http: HttpClient) { }

  getRandomJoke() : Observable<Joke> {
    return this.http.get<Joke>(this.randomJokeURL)
    .pipe(
      tap(data => console.log(data))
    );
  }

  getJokeCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.jokeCategoriesURL)
    .pipe(
      tap(data => console.log(data))
    );
  }
  
  getRandomJokeFromCategory(category: string): Observable<Joke> {
    return this.http.get<Joke>(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .pipe(
      tap(data => console.log(data))
    );
  }
    
}
