import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { UploadService } from '../shared/upload.service';
import { FormBuilder, FormGroup } from '@angular/forms';
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
        post.index
        post.image = this.DJANGO_SERVER + post.image;
        post.image_crop = this.DJANGO_SERVER + post.image_crop;
      }
      return persons;

    })).subscribe((persons:Person[]) => {
          console.log('fetch2')
          console.log(persons)
          this.personService.setpersons(persons);
    });
  }

  get_person(id) {
    return this.http.get<Person>(`${this.DJANGO_SERVER}/api/persons/one/${id}`).pipe(
      map(person => {
    
        person.image = this.DJANGO_SERVER + person.image;
        person.image_crop = this.DJANGO_SERVER + person.image_crop;
        return person;
      })

    );
  }

  public upload(formData) {
    return this.http.post<any>(`${this.DJANGO_SERVER}/api/persons/`, formData);
  }

  public log_login(person, image, checkdoor){
    const formData = new FormData();
    //console.log(this.form.get('profile').value);
    formData.append('log_type', "INFO");
    formData.append('action', "login");
    formData.append('user', person.name);
    formData.append('image', image);
    formData.append('body', checkdoor);
    // console.log(image)
    // console.log(formData)
    
    return this.http.post<any>(`${this.DJANGO_SERVER}/api/log/`, formData);
  }

//   persons:Person[];
//   getAll() {
//     return this.http
//     .get<Person[]>(
//       `${this.DJANGO_SERVER}/api/persons`
//     )
//     .pipe(
//       map(persons => {
    
//         const posts = persons;
//           // convert the dates to a nice format
//         for (let post of posts) {
//           post.index
//           post.image = this.DJANGO_SERVER + post.image;
//           post.image_crop = this.DJANGO_SERVER + post.image_crop;
//         }
//         return persons;
  
//       }))
//   }
// // person_one:Person;
//   public getPersonByID(id){
//     return this.http.get<Person>(
//       `${this.DJANGO_SERVER}/api/persons/one/${id}`
//     )
//     // .subscribe((persons:Person) => {
//     //   console.log(persons);
//     //   // this.person_one=persons;
//     //     return persons;
//     //   });

//     // return this.person_one
//   }

//   getNews(id: number) {
//     return this.getAll().map((data: any) => data.data.data.find(news => news.id === id))
//   }


  // createPerson() {
  
  //   const formData = new FormData();
  //   //console.log(this.form.get('profile').value);
  //   formData.append('image', this.form.get('profile').value);

  //   this.uploadService.upload(formData).subscribe(
  //     (res) => {
  //       this.response = res;
  //       this.imageURL = `${this.DJANGO_SERVER}${res.image}`;
  //       console.log(res);
  //       console.log(this.imageURL);
  //     },
  //     (err) => {  
  //       console.log(err);
  //     }
  //   );
  // }
}

