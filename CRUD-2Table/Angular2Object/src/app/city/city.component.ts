import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {City} from "../model/city";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  formCity: FormGroup;
  cities: City[] = new ;

  constructor() { }

  ngOnInit(): void {
  }

}
