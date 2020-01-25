import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import * as HeroesActions from './heroes.actions';

@Injectable()
export class HeroesEffects {

  loadHeroes$ = createEffect(() => this.actions$.pipe(
    ofType(HeroesActions.getHeroes.type),
    mergeMap(() => this.heroService.getHeroes().pipe(
      map(heroes => ({ type: HeroesActions.getHeroesSuccess.type, payload: heroes })),
      catchError((err) => of({ type: HeroesActions.getHeroesFail.type, payload: err}))
    ))
    )
  );

  addHero$ = createEffect(() => this.actions$.pipe(
    ofType(HeroesActions.addHero.type),
    mergeMap(({ hero }) => this.heroService.addHero(hero).pipe(
      map(heroToAdd => ({ type: HeroesActions.addHeroSuccess.type, payload: heroToAdd })),
      catchError((err) => of({ type: HeroesActions.addHeroFail.type, payload: err }))
    ))
    )
  );

  constructor(private actions$: Actions,
              private heroService: HeroService) {}
}
