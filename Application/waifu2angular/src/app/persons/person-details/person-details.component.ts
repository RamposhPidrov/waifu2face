import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person.model';
 
import { PersonListComponent } from '../person-list/person-list.component';
 
@Component({
  selector: 'person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
 
  @Input() person: Person;
  @Input() index: number;

  constructor(private personService: PersonService, private listComponent: PersonListComponent) { }
 
  ngOnInit() {
  }
 
  // updateActive(isActive: boolean) {
  //   this.personService.updateperson(this.person.id,
  //     { name: this.person.name, jobcode: this.person.jobcode })
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.person = data as Person;
  //       },
  //       error => console.log(error));
  // }
 
  // deleteperson() {
  //   this.personService.deleteperson(this.person.id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.listComponent.reloadData();
  //       },
  //       error => console.log(error));
  // }
 
}
