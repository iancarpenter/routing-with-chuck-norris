import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing-module';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { JokeCategoriesComponent } from './joke-categories/joke-categories.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RandomJokeComponent,
    JokeCategoriesComponent,            
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
