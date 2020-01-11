import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable, Subject, merge } from 'rxjs';
import { Hero } from '../hero';
import { Router } from '@angular/router';
import { scan } from 'rxjs/operators';


@Component({
  selector: 'app-heroes',
  template: `<app-heroes-ui [heroes]="heroes$ | async"
                            (selectHero)="navigateToHero($event)"
                            (addHero)="add($event)"
                            (deleteHero)="delete($event)"></app-heroes-ui>`
})
export class HeroesContainerComponent implements OnInit {
  getHeroes = new Subject();
  deleteHero = new Subject();
  addHero = new Subject();

  heroes$: Observable<Hero[]> = merge(this.getHeroes.asObservable(), this.deleteHero.asObservable(), this.addHero.asObservable())
    .pipe(scan((acc, curr: { action: string, value?: Hero | Hero[] }) => {
      switch (curr.action) {
        case 'GET':
          // @ts-ignore
          return [...acc, ...curr.value];
        case 'ADD':
          return [...acc, curr.value];
        case 'DEL':
          return acc.filter(h => h !== curr.value);
        default:
          return acc;
      }
    }, []));

  constructor(private heroService: HeroService,
              private router: Router) { }

  navigateToHero(heroId: number) {
    this.router.navigate([`/detail/${heroId}`]);
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
                    .subscribe(heroes => this.getHeroes.next({action: 'GET', value: heroes}));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
                    .subscribe(hero => this.addHero.next({action: 'ADD', value: hero}));
  }

  delete(heroToDelete: Hero): void {
    this.heroService.deleteHero(heroToDelete)
                    .subscribe(() => this.deleteHero.next({action: 'DEL', value: heroToDelete}));
  }



}
