import { createAction, props } from '@ngrx/store';
import { Hero } from '../hero';

export const getHeroes = createAction('[Heroes] Get Heroes');
export const getHeroesSuccess = createAction('[Heroes] Get Heroes Success', props<{ payload: Hero[] }>());
export const getHeroesFail = createAction('[Heroes] Get Heroes Fail', props<{ payload: any }>());


