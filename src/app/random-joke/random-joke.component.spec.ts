import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomJokeComponent } from './random-joke.component';

describe('RandomJokeComponent', () => {
  let component: RandomJokeComponent;
  let fixture: ComponentFixture<RandomJokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomJokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
