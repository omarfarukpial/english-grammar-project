import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceChangeComponent } from './voice-change.component';

describe('VoiceChangeComponent', () => {
  let component: VoiceChangeComponent;
  let fixture: ComponentFixture<VoiceChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoiceChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
