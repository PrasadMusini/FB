import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookVillaComponent } from './book-villa.component';

describe('BookVillaComponent', () => {
  let component: BookVillaComponent;
  let fixture: ComponentFixture<BookVillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookVillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookVillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
