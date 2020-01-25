import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroesState } from './heroes.state';

/*
* The following is equivalent to:
* const selectHeroesState = (appState: AppState) => appState.heroesState;
* */
const selectHeroesState = createFeatureSelector<HeroesState>('hero'); // 'hero' comes from index.ts

export const heroesSelector = createSelector(selectHeroesState, heroesState => heroesState.heroes);
export const heroByIdSelector = createSelector(heroesSelector, (heroes, id) => heroes.find(h => h.id === id));
export const matchingHeroNamesSelector = createSelector(heroesSelector, (heroes, term) => heroes.filter(h => h.name.includes(term)));
