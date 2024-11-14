import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyJSONComponent } from './dummyjson.component';

describe('DummyJSONComponent', () => {
  let component: DummyJSONComponent;
  let fixture: ComponentFixture<DummyJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyJSONComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
