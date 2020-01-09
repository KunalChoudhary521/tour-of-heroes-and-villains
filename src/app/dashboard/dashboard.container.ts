import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from '../hero';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  template: `<app-dashboard-ui [heroes]="topHeroes$ | async"
                               (selectHero)="navigateToHero($event)"></app-dashboard-ui>`
})
export class DashboardContainerComponent {
  topHeroes$: Observable<Hero[]> = this.heroService.getHeroes()
                                                   .pipe(map(heroes => heroes.slice(1, 5)));

  constructor(private heroService: HeroService, private router: Router) { }

  navigateToHero(heroId: number) {
    this.router.navigate([`/detail/${heroId}`]);
  }
}
