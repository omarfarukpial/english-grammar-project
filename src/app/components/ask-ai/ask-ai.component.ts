import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { GroqService } from '../../services/groq.service';

@Component({
  selector: 'app-ask-ai',
  standalone: true,
  imports: [FormsModule, DropdownModule, CardModule, InputTextareaModule, ButtonModule],
  templateUrl: './ask-ai.component.html',
  styleUrl: './ask-ai.component.css'
})
export class AskAiComponent {

  inputText: string | undefined;
  outputText: string | undefined;


  constructor(
    private groqService: GroqService
  ) {}

  onAskClick() {
    this.outputText = 'Loading...';
    if (this.inputText && this.inputText.trim().length > 0)
    this.groqService.getAnsFromAI(this.inputText).subscribe(res => {
      if (res && res.choices && res.choices.length > 0) {
        this.outputText = res.choices[0].message.content.replace(/<think>.*?<\/think>/gs,'').trim();;
      }
    });
  }
}
