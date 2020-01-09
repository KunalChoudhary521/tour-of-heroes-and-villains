import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardContainerComponent } from './dashboard/dashboard.container';
import { HeroDetailContainerComponent } from './hero-detail/hero-detail.container';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardContainerComponent },
  { path: 'detail/:id', component: HeroDetailContainerComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
