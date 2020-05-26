import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
 
@Injectable()
export class PersonDataService {
 
  constructor(private http: HttpClient) { }
  DJANGO_SERVER: string = "http://127.0.0.1:8000";

  // Uses http.get() to load data from a single API endpoint
  list() {
    return this.http.get(`${this.DJANGO_SERVER}/api/persons`);
  }
 
  // send a POST request to the API to create a new data object
//   create(post, token) {
//     return this.http.post('/api/posts', JSON.stringify(post));
//   }
}