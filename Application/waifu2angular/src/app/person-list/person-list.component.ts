import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
 
import { PersonService } from '../person.service';
import { Person } from '../person';
 
@Component({
  selector: 'persons-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  // persons:any;
  persons: Observable<Person[]>;
  // persons: Person[];
  
 
  constructor(private personService: PersonService) { }
 
  async ngOnInit() {
    
    this.reloadData();
    // this.retrievePersons();
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
    this.persons = this.personService.getPersonsList();
    
    // this.persons = this.personService.getAll();

    console.log('persons: ' + this.persons);
  }
 
}
