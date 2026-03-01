import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  private url = 'http://localhost:3000/suggestions';

  constructor(private http: HttpClient) {}

  // 🔹 GET ALL
  getSuggestionsList() {
    return this.http.get<any[]>(this.url);
  }

  // 🔹 GET BY ID
  getSuggestionById(id: number) {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  // 🔹 ADD
  addSuggestion(s: any) {
    return this.http.post(this.url, s);
  }

  // 🔹 DELETE
  deleteSuggestion(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}