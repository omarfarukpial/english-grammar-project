import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationOfSentencesComponent } from './transformation-of-sentences.component';

describe('TransformationOfSentencesComponent', () => {
  let component: TransformationOfSentencesComponent;
  let fixture: ComponentFixture<TransformationOfSentencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformationOfSentencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransformationOfSentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
