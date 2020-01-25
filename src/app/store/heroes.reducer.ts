import { HeroesState } from './heroes.state';
import { Action, createReducer, on } from '@ngrx/store';
import * as HeroesActions from './heroes.actions';

export const initialAppState: HeroesState = {
  heroes: [],
  isLoading: false,
  errors: null
};

// tslint:disable-next-line:variable-name
const _heroesReducer = createReducer(initialAppState,
  on(HeroesActions.getHeroes, state => ({...state, isLoading: true})),
  on(HeroesActions.getHeroesSuccess, (state, { payload }) => ({...state, heroes: payload, isLoading: false})),
  on(HeroesActions.getHeroesFail, (state, { payload }) => ({...state, heroes: null, isLoading: false, errors: payload})),

  on(HeroesActions.addHero, state => ({...state })),
  on(HeroesActions.addHeroSuccess, (state, { payload }) => ({...state, heroes: [ ...state.heroes, payload ]})),
  on(HeroesActions.addHeroFail, (state, { payload }) => ({...state, errors: payload}))
);


/* The exported reducer function is necessary as function calls are not supported by the AOT compiler. */
export function heroesReducer(state: HeroesState | undefined, action: Action) {
  return _heroesReducer(state, action);
}
