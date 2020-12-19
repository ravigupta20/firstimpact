import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiboxComponent } from './apibox.component';

describe('ApiboxComponent', () => {
  let component: ApiboxComponent;
  let fixture: ComponentFixture<ApiboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
