import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroqService {
  private readonly API_KEY = 'I-will-not-give-you';
  private readonly GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
  constructor(
    private httpClient: HttpClient
  ) { }

  getConversion(title: String | undefined, message: string | undefined, fromState: string | undefined, toState: string | undefined): Observable<any> {
    const headers = {
      'Authorization': `Bearer ${this.API_KEY}`,
      'Content-Type': 'application/json'
    };
    const baseQuery = {
      "model": "gemma-7b-it",
      "messages": [{
          "role": "user",
          "content": `Please perform ${title} on the following sentence from ${fromState} to ${toState} only give me the answer not any extra text, use basic english ${title} rules. If the sentence is not in ${fromState} or already in ${toState} then do not convert it and give the message accordingly. The sentence is: '${message}'`
      }]
    }
    return this.httpClient.post(this.GROQ_ENDPOINT, baseQuery, {headers});
  }
}
