import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {City} from "../model/city";
import {CityService} from "../service/city.service";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  formCity: FormGroup = new FormGroup({});
  cities?: City[];
  city?: City;

  constructor(private cityService: CityService,
              private formGroup: FormBuilder) { }

  ngOnInit(): void {
  }

}
