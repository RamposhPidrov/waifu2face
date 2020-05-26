import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { Person } from '../persons/person.model';
import { PersonService } from '../persons/person.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private personService: PersonService) {}
  DJANGO_SERVER: string = "http://127.0.0.1:8000";
  error = new Subject<string>();

  storepersons() {
    const persons = this.personService.getpersons();
    this.http
      .post(
        `${this.DJANGO_SERVER}/api/persons`,
        persons
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchpersons() {
  console.log('fetchpersons()');
    
  this.http
  .get<Person[]>(
    `${this.DJANGO_SERVER}/api/persons`
  )
  .pipe(
    map(persons => {
  
      const posts = persons;
        // convert the dates to a nice format
      for (let post of posts) {
        post.image = this.DJANGO_SERVER + post.image;
        post.image_crop = this.DJANGO_SERVER + post.image_crop;

      }
      
      return persons;

    })).subscribe((persons:Person[]) => {
          
          this.personService.setpersons(persons);
    });

    // this.http
    //   .get<Person[]>(
    //     `${this.DJANGO_SERVER}/api/persons`
    //   )
    //   .pipe(
    //     map(recipes => {
    //       return recipes.map(recipe => {
    //         return {
    //           ...recipe
    //         };
    //       });
    //     })
    //   )
    //   .subscribe(persons => {
    //     this.personService.setpersons(persons);
    //   });

    // this.http
    //   .get<Person[]>(
    //     `${this.DJANGO_SERVER}/api/persons`
    //   )
    //   .pipe(
    //     map(persons => {

    //       return persons;
    //     })
    //   )
    //   .subscribe((persons:Person[]) => {
    //     console.log(persons);
    //     this.personService.setpersons(persons);
    //   });

    // this.http
    // .get<Person[]>(
    //   `${this.DJANGO_SERVER}/api/persons`
    // )
    // .subscribe((persons) => {
    //   console.log(persons);
    //   this.personService.setpersons(persons);
    // });

  }
}

