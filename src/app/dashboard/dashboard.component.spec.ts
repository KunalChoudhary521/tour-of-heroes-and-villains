import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContainerComponent } from './dashboard.container';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardContainerComponent;
  let fixture: ComponentFixture<DashboardContainerComponent>;
  let heroService;
  let getHeroesSpy;

  beforeEach(async(() => {
    heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    getHeroesSpy = heroService.getHeroes.and.returnValue( of(HEROES) );
    TestBed.configureTestingModule({
      declarations: [
        DashboardContainerComponent,
        DashboardComponent,
        HeroSearchComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: HeroService, useValue: heroService }
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Heroes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('Top Heroes');
  });

  it('should call heroService', async(() => {
    expect(getHeroesSpy.calls.any()).toBe(true);
    }));

  it('should display 4 links', async(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  }));

});
