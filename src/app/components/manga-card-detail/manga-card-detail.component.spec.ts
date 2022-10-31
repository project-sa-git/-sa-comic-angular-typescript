import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaCardDetailComponent } from './manga-card-detail.component';

describe('MangaCardDetailComponent', () => {
  let component: MangaCardDetailComponent;
  let fixture: ComponentFixture<MangaCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
