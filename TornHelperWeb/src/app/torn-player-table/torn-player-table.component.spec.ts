import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TornPlayerTableComponent } from './torn-player-table.component';

describe('TornPlayerTableComponent', () => {
  let component: TornPlayerTableComponent;
  let fixture: ComponentFixture<TornPlayerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TornPlayerTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TornPlayerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
