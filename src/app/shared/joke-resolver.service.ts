import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { JokeService } from './joke.service';
import { Joke } from './joke';

@Injectable({
    providedIn: 'root'
})

export class JokeResolver implements Resolve<Joke> {

    constructor(private jokeService: JokeService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Joke> {
        const randomJoke$ = this.jokeService.randomJoke$;
        return randomJoke$;
    }

}