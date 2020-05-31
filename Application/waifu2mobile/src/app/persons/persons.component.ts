import { Component, OnInit } from '@angular/core';
import { PersonListComponent } from './person-list/person-list.component'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
