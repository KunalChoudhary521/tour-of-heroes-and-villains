import { createAction, props } from '@ngrx/store';
import { Hero } from '../hero';

export const getHeroes = createAction('[Heroes] Get Heroes');
export const getHeroesSuccess = createAction('[Heroes] Get Heroes Success', props<{ payload: Hero[] }>());
export const getHeroesFail = createAction('[Heroes] Get Heroes Fail', props<{ payload: any }>());

export const addHero = createAction('[Heroes] Add Hero', (hero: Hero) => ({ hero }));
export const addHeroSuccess = createAction('[Heroes] Add Hero Success', props<{ payload: Hero }>());
export const addHeroFail = createAction('[Heroes] Add Hero Fail', props<{ payload: any }>());

export const deleteHero = createAction('[Heroes] Delete Hero', (hero: Hero) => ({ hero }));
export const deleteHeroSuccess = createAction('[Heroes] Delete Hero Success', props<{ payload: Hero }>());
export const deleteHeroFail = createAction('[Heroes] Delete Hero Fail', props<{ payload: any }>());
