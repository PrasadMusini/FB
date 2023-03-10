import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TindogSiteComponent } from './tindog-site.component';

describe('TindogSiteComponent', () => {
  let component: TindogSiteComponent;
  let fixture: ComponentFixture<TindogSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TindogSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TindogSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
