import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {City} from "../model/city";
import {CityService} from "../service/city.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {National} from "../model/national";
import {NationalService} from "../service/national.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  formCity: FormGroup = new FormGroup({});
  cities!: City[];
  city!: City;
  nationals?: National[];

  constructor(private cityService: CityService,
              private formGroup: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private nationalService: NationalService) { }

  ngOnInit(): void {
    this.getAllNational()
    this.formCity = this.formGroup.group({
      id: [''],
      name: ['', [Validators.required]],
      nation: [''],
      area: ['', [Validators.required, Validators.min(1)]],
      population: ['', [Validators.required, Validators.min(1)]],
      gdp: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required]],
    })
    console.log(this.formCity)
    if (this.editData) {
      this.formCity.controls['id'].setValue(this.editData.id);
      this.formCity.controls['name'].setValue(this.editData.name);
      this.formCity.controls['area'].setValue(this.editData.area);
      this.formCity.controls['population'].setValue(this.editData.population);
      this.formCity.controls['gdp'].setValue(this.editData.gdp);
      this.formCity.controls['description'].setValue(this.editData.description);
      this.formCity.controls['national'].setValue(this.editData.nation);
    }
  }

  getAllNational() {
    this.nationalService.getAllNational().subscribe((data) => {
      this.nationals = data;
    })
  }

  createCity() {
    const city = {
      id: this.formCity.value.id,
      name: this.formCity.value.name,
      area: this.formCity.value.area,
      population: this.formCity.value.population,
      gdp: this.formCity.value.gdp,
      description: this.formCity.value.description,
      national: {
        id: this.formCity.value.nation}
    };
    console.log(city)
    this.cityService.createCity(city).subscribe(() => {
      alert('Create successfully');
    })
  }

  editCity(id: number) {
    this.cityService.getCityById(id).subscribe(data => this.formCity.patchValue(data));
  }



}
