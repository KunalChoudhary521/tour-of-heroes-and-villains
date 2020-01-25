import { Hero } from '../hero';

export interface HeroesState {
  heroes: Hero[];
  isLoading: boolean;
  errors: any;
}
