import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpClient = inject(HttpClient);
  private apiUrl = environment.API_HOST;
  constructor() { }

  generateResponse(prompt: string): Observable<any>{
    const requestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": prompt}]
    }
    const options = {
      headers : {
        'Content-type': 'application/json',
        Authorization:   `Bearer ${environment.API_KEY}`
      }
    }

    return this.httpClient.post<any>(this.apiUrl, requestBody, options)
  }
}
