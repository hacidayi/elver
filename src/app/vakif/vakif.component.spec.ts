import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakifComponent } from './vakif.component';

describe('VakifComponent', () => {
  let component: VakifComponent;
  let fixture: ComponentFixture<VakifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
