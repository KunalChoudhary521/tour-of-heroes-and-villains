import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
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

  constructor(private actions$: Actions,
              private heroService: HeroService) {}
}
