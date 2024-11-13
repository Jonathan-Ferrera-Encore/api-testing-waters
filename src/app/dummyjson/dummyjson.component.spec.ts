import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyjsonComponent } from './dummyjson.component';

describe('DummyjsonComponent', () => {
  let component: DummyjsonComponent;
  let fixture: ComponentFixture<DummyjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyjsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
