import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  template: `<app-hero-detail-ui [hero]="hero$ | async"
                                 (heroChange)="save($event)"
                                 (cancel)="goBack()"></app-hero-detail-ui>`
})
export class HeroDetailContainerComponent {
  hero$: Observable<Hero> = this.route.paramMap.pipe(
                                                filter(params => params.has('id')),
                                                switchMap(params => this.heroService.getHero(+params.get('id'))));

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  save(hero): void {
    this.heroService.updateHero(hero).subscribe(() => this.goBack());
  }
}
