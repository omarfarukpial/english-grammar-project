import { Component } from '@angular/core';
import { ConversionsComponent } from '../conversions.component';

@Component({
  selector: 'app-transformation-of-sentences',
  standalone: true,
  imports: [ConversionsComponent],
  templateUrl: './transformation-of-sentences.component.html',
  styleUrl: './transformation-of-sentences.component.css'
})
export class TransformationOfSentencesComponent {
  title: string = 'Transformation of Sentence';
  transformationOptions: string[] = ['Affirmative', 'Negative', 'Simple', 'Complex', 'Compound', 'Direct Speech', 'Indirect Speech'];
}
