import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeChangeComponent } from './degree-change.component';

describe('DegreeChangeComponent', () => {
  let component: DegreeChangeComponent;
  let fixture: ComponentFixture<DegreeChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegreeChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DegreeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
