import { Component } from '@angular/core';
import { ConversionsComponent } from "../conversions.component";

@Component({
  selector: 'app-voice-change',
  standalone: true,
  imports: [ConversionsComponent],
  templateUrl: './voice-change.component.html',
  styleUrl: './voice-change.component.css'
})
export class VoiceChangeComponent {
  title: string = 'Voice Change';
  voiceOptions: string[] = ['Active Voice', 'Passive Voice'];
}
