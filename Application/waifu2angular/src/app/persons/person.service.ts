import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Person } from './person.model';


@Injectable()
export class PersonService {
  personsChanged = new Subject<Person[]>();
  private persons: Person[] = [];

  constructor() {}

  setpersons(persons: Person[]) {
    console.log(persons);
    this.persons=persons;
    this.personsChanged.next(this.persons.slice());
  }

  getpersons() {
    return this.persons.slice();
  }

  getperson(index: number) {
    return this.persons[index];
  }

  addperson(person: Person) {
    this.persons.push(person);
    this.personsChanged.next(this.persons.slice());
  }

  updateperson(index: number, newperson: Person) {
    this.persons[index] = newperson;
    this.personsChanged.next(this.persons.slice());
  }

  deleteperson(index: number) {
    this.persons.splice(index, 1);
    this.personsChanged.next(this.persons.slice());
  }
}
