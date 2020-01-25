import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from '../hero';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { heroesSelector } from '../store/heroes.selector';
import * as HeroesActions from '../store/heroes.actions';
import { AppState } from '../store';

@Component({
  selector: 'app-dashboard',
  template: `<app-dashboard-ui [heroes]="topHeroes$ | async"
                               (selectHero)="navigateToHero($event)"></app-dashboard-ui>`
})
export class DashboardContainerComponent implements OnInit {
  topHeroes$: Observable<Hero[]> = this.store.pipe(select(heroesSelector), map(heroes => heroes.slice(1, 5)));

  constructor(private router: Router, private store: Store<AppState>) { }

  navigateToHero(heroId: number) {
    this.router.navigate([`/detail/${heroId}`]);
  }

  ngOnInit() {
    this.store.dispatch(HeroesActions.getHeroes());
  }
}
