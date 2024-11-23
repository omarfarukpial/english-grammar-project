import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { GroqService } from '../../services/groq.service';

@Component({
  selector: 'app-conversions',
  standalone: true,
  imports: [DropdownModule, InputTextareaModule, FormsModule, CardModule, ButtonModule],
  templateUrl: './conversions.component.html',
  styleUrl: './conversions.component.css'
})
export class ConversionsComponent {
  @Input() conversionTitle: string | undefined;
  @Input() conversionOptions: string[] | undefined;
  @Input() selectedFromConversionOption: string | undefined;
  @Input() selectedToConversionOption: string | undefined;
  inputText: string | undefined;
  outputText: string | undefined;

  constructor(
    private groqService: GroqService
  ) {}


  ngOnInit() {

  }

  onConvertClick(): void {
    this.outputText = 'Loading...';
    if (this.inputText && this.inputText?.trim().length > 0) {
      this.groqService.getConversion(this.conversionTitle, this.inputText, this.selectedFromConversionOption, this.selectedToConversionOption).subscribe(
        res => {
          if (res && res.choices && res.choices.length > 0) {
            this.outputText = res.choices[0].message.content;
          }
        }
      );
    }
  }






}
