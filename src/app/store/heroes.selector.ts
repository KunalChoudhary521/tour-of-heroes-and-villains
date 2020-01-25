import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroesState } from './heroes.state';

const hero = createFeatureSelector<HeroesState>('hero'); // 'hero' comes from index.ts

export const heroesSelector = createSelector(hero, h => h.heroes);
