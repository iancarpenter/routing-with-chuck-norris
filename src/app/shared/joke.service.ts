import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  randomJokeURL = 'https://api.chucknorris.io/jokes/random';
  jokeCategoriesURL = 'https://api.chucknorris.io/jokes/categories';  
    
  constructor(private http: HttpClient) { }

  randomJoke$ = this.http.get<Joke>(this.randomJokeURL)
   .pipe(
     tap(data => console.log(data)),
     catchError(this.handleError)
    );

  jokeCategories$ = this.http.get<string[]>(this.jokeCategoriesURL)
   .pipe(
     tap(data => console.log(data)),
     catchError(this.handleError)
    );
      
  getRandomJokeFromCategory(category: string): Observable<Joke> {
    return this.http.get<Joke>(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(err: any): Observable<never> {  
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.      
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
    
}
