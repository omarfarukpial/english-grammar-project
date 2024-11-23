import { Component } from '@angular/core';
import { ConversionsComponent } from '../conversions.component';

@Component({
  selector: 'app-degree-change',
  standalone: true,
  imports: [ConversionsComponent],
  templateUrl: './degree-change.component.html',
  styleUrl: './degree-change.component.css'
})
export class DegreeChangeComponent {
  title: string = 'Degree Change';
  degreeOptions: string[] = ['Positive Degree', 'Comparative Degree', 'Superlative Degree'];
}
