import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONPlaceholderComponent } from './jsonplaceholder.component';

describe('JSONPlaceholderComponent', () => {
  let component: JSONPlaceholderComponent;
  let fixture: ComponentFixture<JSONPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JSONPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JSONPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
