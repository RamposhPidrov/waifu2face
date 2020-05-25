import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class PersonService {
 
  private baseUrl = 'http://localhost:8000/api/persons';

  constructor(private http: HttpClient) { }
 
  getPerson(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  createPerson(person: Object): Observable<object> {
    return this.http.post(`${this.baseUrl}/`, person);
  }
 
  updatePerson(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
 
  getPersonsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
    
  }

  getAll(){
    return this.http.get(this.baseUrl);
  }
 
}
