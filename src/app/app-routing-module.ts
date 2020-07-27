import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { JokeCategoriesComponent } from './joke-categories/joke-categories.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'random', component: RandomJokeComponent },
            { path: 'categories', component: JokeCategoriesComponent },
            { path: '**', component: PageNotFoundComponent }
        ], { enableTracing: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }