import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { PersonService } from '../person.service';
import { Person } from '../person.model';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  // persons:any;
  // persons: Observable<Person[]>;
  persons;
  subscription: Subscription;

 
  constructor(private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService,
    ) {
}
  async ngOnInit() {
    
    this.subscription = this.personService.personsChanged
      .subscribe(
        (persons: Person[]) => {
          this.persons = persons;
        }
      );
    // console.log(this.persons);

    this.onFetchData();
    
    // this.getPersons();

    // this.persons = this.personService.getpersons();

  }

  // getPersons() {
  //   this.persondataService.list().subscribe(
  //     // the first argument is a function which runs on success
  //     data => {
  //       this.persons = data;
  //       // convert the dates to a nice format
     
  //     },
  //     // the second argument is a function which runs on error
  //     err => console.error(err),
  //     // the third argument is a function which runs on completion
  //     () => console.log('done loading persons')
  //   );
  // }
 
  onFetchData() {
    this.dataStorageService.fetchpersons();
  }

  // deletepersons() {
  //   this.personService.deleteAll()
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log('ERROR: ' + error));
  // }



 
  reloadData() {
    // this.persons = this.personService.getAll()
    
    // this.persons = this.personService.getAll();

    console.log('persons: ' + this.persons);
  }
 
}
